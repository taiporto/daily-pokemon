import React, {useState} from "react"
import { Box } from "grommet"

import { colors } from "../styles/styleSettings"

import DateSelector from './DateSelector'

const DropContent = ({ defineBirthDateData }) => {
  const [dayValue, setDayValue] = useState("")
  const [monthValue, setMonthValue] = useState("")

  const setData = (data, type) => {
    if(data < 10) data="0"+data
    type === "day" ? setDayValue(data) : setMonthValue(data);
  }

  return (
    <Box background={colors.red} pad="medium" responsive="true" onChange={(dayValue !== '' && monthValue!== '') ? defineBirthDateData(`2020-${monthValue}-${dayValue}`) : 0}>
      <DateSelector
        type="month"
        setData={setData}
      />
      <DateSelector
        type="day"
        setData={setData}
      />
    </Box>
  )
}

export default DropContent