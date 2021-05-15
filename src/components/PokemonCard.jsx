import React from "react"
import styled from "styled-components"
import { darken, lighten } from "polished"

import { mediaQueries } from "../styles/styleSettings"
import { getColorDefinition } from "../utils/colorAnalysis"

const Card = styled.div`
  width: 80vw;
  margin: 30px auto;
  padding: 15px 50px 30px;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => {
    switch (getColorDefinition(props.mainColor)) {
      case "dark":
        return lighten(0.8, "" + props.mainColor)
      case "light":
        return darken(0.8, "" + props.mainColor)
      case "neutral":
        return darken(0.7, "" + props.mainColor)
      default:
        return props.mainColor
    }
  }};

  background: ${(props) => {
    const insideColor = props.mainColor
    const outsideColor = darken(0.2, "" + props.mainColor)
    return `radial-gradient(147.98% 147.98% at 50% 21.66%, ${insideColor} 0%, ${outsideColor} 100%), ${outsideColor}`
  }};

  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);

  & > img {
    margin: 0 auto;
  }

  ${mediaQueries("min", "sm")`
    width: 372px; 
`}
`

const PokeInfo = styled.div`
  width: 100%;
  text-align: left;
`

const PokeInfoSpan = styled.span`
  text-align: left;
  align-self: flex-start;
`

const PokemonCard = ({ pokemonData, pokemonColors }) => {

  return (
    <>
      <Card
        mainColor={
          getColorDefinition(pokemonColors[1].hexValue) === "light" ||
          getColorDefinition(pokemonColors[1].hexValue) === "neutral"
            ? pokemonColors[1].hexValue
            : pokemonColors[0].hexValue
        }
      >
        {/* Imagem */}
        {pokemonData.sprites && (
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          ></img>
        )}

        {/* Nome */}
        <h2>{pokemonData.name}</h2>

        <PokeInfo>
          {/* Types */}
          <PokeInfoSpan>
            {pokemonData.types.length > 1 ? "Types: " : "Type: "}
            {pokemonData.types.map((type, index, arr) =>
              index < arr.length - 1 ? (
                <span key={index}>{type.type.name}, </span>
              ) : (
                <span key={index}>{type.type.name}</span>
              )
            )}
          </PokeInfoSpan>

          <br />

          {/* Height and Weight */}
          <PokeInfoSpan>Height: {pokemonData.height*10}cm</PokeInfoSpan><br />
          <PokeInfoSpan>Weight: {pokemonData.weight/10}kg</PokeInfoSpan><br />

          {/* Evolutions */}

          {/* Stats */}
          <PokeInfoSpan>
            Stats:<br/>
            {pokemonData.stats.map((stat, index, arr) =>
              index < arr.length - 1 ? (
                <span key={index}>&nbsp;&nbsp;{stat.stat.name}: {stat.base_stat}<br/></span>
              ) : (
                <span key={index}>&nbsp;&nbsp;{stat.stat.name}: {stat.base_stat}</span>
              )
            )}
          </PokeInfoSpan>

          {/* Flavor text */}
        </PokeInfo>

        <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "20px auto"}}>
          {pokemonColors.map((color, index, arr) => (
            <div
              style={{
                width: "25px",
                height: "25px",
                margin: "0 5px",
                borderRadius: "100px",
                backgroundColor: color.hexValue,
              }}
              key={index}
            >
             {/*  <span>
                {color.name}: {color.hexValue} <br />
              </span> */}
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default PokemonCard
