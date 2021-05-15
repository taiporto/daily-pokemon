import React from "react"
import { Heading } from "grommet"
import styled from 'styled-components'

const StyledHeading = styled(Heading)`
font-weight: 800;
text-align: center
`

function Title({ color }) {
  return <StyledHeading level={1} color={color} responsive={true}>Who's the daily pokémon?</StyledHeading>
}

export default Title
