import React, { useState, useEffect, useRef } from 'react'
import { Grommet, Box } from 'grommet'
import { DateTime } from "luxon"
import * as Vibrant from "node-vibrant"

import {GlobalStyle, GrommetStyle} from "./styles/globalStyle"


import { getColorDefinition } from "./utils/colorAnalysis"

import Title from "./components/Title"
import PokemonCard from "./components/PokemonCard"
import Button from "./components/Button"
import DropContent from './components/DropContent'
import ButtonStrip from "./components/ButtonStrip"
import LoadingPokeball from "./components/LoadingPokeball"

const Main = () => {

  const [pokemon, setPokemon] = useState({})

  const [pokemonColors, setPokemonColors] = useState([])

  const [cardIsOpen, setCardIsOpen] = useState(false)

  const [birthDate, setBirthDate] = useState("")

  const [isLoading, setIsLoading] = useState(true)

  const isFirstRun = useRef(true)

  const fetchPokemon = (pokemonNumber) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((res) => res.json())
      .then((data) => {
        return data
      })
      .catch((err) => console.log(err))
  }

  const fecthPokemonColors = (pokemonImg) => {
    return Vibrant.from(pokemonImg).getPalette().then((pallete) => {
      
        let tempColorArray = []

        for (const color in pallete) {
          if (pallete.hasOwnProperty(color) && pallete[color]) {
            tempColorArray.push({
              name: color,
              hexValue: pallete[color].getHex(),
              frequency: pallete[color].getPopulation(),
            })
          }
        }

        tempColorArray.sort((a, b) => {
          return b.frequency - a.frequency
        })

        tempColorArray.sort((a, b) => {
          if (
            getColorDefinition(a.hexValue) === "light" &&
            (getColorDefinition(b.hexValue) === "dark" ||
              getColorDefinition(b.hexValue) === "neutral")
          ) {
            return b - a
          } else {
            return a - b
          }
        })

        return tempColorArray
      }).catch((err) => {
        console.log(err)
      })
  }
  
  const handleClick = (e) => {
    const { name } = e.target
    if (name === "main_Button") {
      setIsLoading(true)

      let pokeNumber = 0

      // Se o card já não estiver aberto
      if (!cardIsOpen) {
        pokeNumber = DateTime.local().toFormat("ooo").replace(/^0/, "")
      } else {
        pokeNumber = Math.floor(Math.random() * 365) + 1
      }

      fetchPokemon(pokeNumber).then((tempData) => {
        setPokemon({
          ...tempData,
        })

        fecthPokemonColors(tempData.sprites.front_default).then(
          (colorArray) => {
            setPokemonColors(colorArray)
            setIsLoading(false)
          }
        )
      })

      setCardIsOpen(true)
    }
  }

  const defineBirthDateData = (data) => {
    setBirthDate(data)
  }

  //Executar toda vez que o valor de birthDate mudar
  useEffect(() => {
    if (isFirstRun.current === false) {

      setIsLoading(true)

      const birthDateDayOfYear = DateTime.fromISO(birthDate).toFormat("ooo").replace(/^0/, "")

      fetchPokemon(birthDateDayOfYear).then((tempData) => {
        setPokemon({
          ...tempData,
        })

        fecthPokemonColors(tempData.sprites.front_default).then(
          (colorArray) => {
            setPokemonColors(colorArray)
            setIsLoading(false)
          }
        )
      })

      setCardIsOpen(true)
    } else {
      isFirstRun.current = false
    }
  }, [birthDate])

  const Buttons = [
    <Button
      key="0"
      buttonName="main_Button"
      buttonText={
        cardIsOpen ? "Get another pokémon!" : "Get the daily pokémon!"
      }
      onClick={handleClick}
    />,
    <Button
      key="1"
      buttonName="birthdate_Button"
      buttonType="Dropdown"
      buttonText={"Get my birthday pokémon!"}
      dropContent={<DropContent defineBirthDateData={defineBirthDateData}/>}
      onClick={handleClick}
    />  
  ]

  return (
    <>
      <GlobalStyle />
      <Grommet theme={GrommetStyle}>
      <main>
        <Box margin={{"vertical": "2em","horizontal":"auto"}} align="center">
          <Title color="mainText" />
          <ButtonStrip cardIsOpen={cardIsOpen} handleClick={handleClick} defineBirthDateData={defineBirthDateData} children={[...Buttons]}/>
          <Box fill="true">
            {isLoading ? (
              !cardIsOpen ?
                <LoadingPokeball yMargin={"2em"} xMargin={"auto"} animationPlayState={"paused"}/>
                :
                <LoadingPokeball yMargin={"2em"} xMargin={"auto"} animationPlayState={"running"}/>
            ) : (
              <PokemonCard
                pokemonData={pokemon}
                pokemonColors={pokemonColors}
              />
            )}
          </Box>
        </Box>
      </main>
    </Grommet>
    </>
  )
}

export default Main