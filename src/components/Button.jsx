import React from "react"
import styled from "styled-components"

import { Button, DropButton } from "grommet"

const StyledButton = styled(Button)`
  margin: 1.2vh 10px;
  filter: drop-shadow(0px 4px 8px rgba(65, 55, 1, 0.25));
  transition: all 0.15s ease-out;
`

const StyledDropButton = styled(DropButton)`
  margin: 1.2vh 10px;
  filter: drop-shadow(0px 4px 8px rgba(65, 55, 1, 0.25));
  transition: all 0.15s ease-out;
`

const PokeButton = ({ buttonName, buttonType, buttonText, dropContent, onClick }) => {
  return buttonType === "Dropdown"?
   (
    <StyledDropButton
      alignself="center"
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={dropContent}
      name={buttonName}
      onClick={onClick}>
      {buttonText}
    </StyledDropButton>
  ) :
  (
    <StyledButton onClick={(e)=>onClick(e)} name={buttonName} alignself="center">
      {buttonText}
    </StyledButton>
  )
}

export default PokeButton