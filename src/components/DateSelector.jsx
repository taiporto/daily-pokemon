import React, {useState} from "react"
import { Select, FormField } from "grommet"

const DateSelector = ({ type, setData }) => {
  const [selectValue, setSelectValue] = useState("1")

  const size = type === 'day' ? 31 : 12

  const selectOptions = new Array(size).fill(null).map((item, index, arr) => index+1)

  return (
    <FormField label={type==='day'?'Day: ': 'Month: '}>
      <Select
        options={selectOptions}
        value={selectValue}
        onChange={({ option }) => {setData(option, type); setSelectValue(option)}}
      />
    </FormField>
  )
}

export default DateSelector
