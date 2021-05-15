import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../styles/styleSettings"

const StyledButtonStrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px 20px;

  ${mediaQueries("min", "md")`
    flex-direction: row;
`}
`

const ButtonStrip = ({ children }) => {
  return (
    <StyledButtonStrip> 
      {children}
    </StyledButtonStrip>
  )
}

export default ButtonStrip
