import React from 'react'
import styled, {keyframes} from 'styled-components'

import Pokeball from '../pokeball.svg'

const loadingAnimation = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(361deg);}
`

const StyledImg = styled.img`
    width: 15%;
    height: auto;
    animation: ${loadingAnimation} .8s infinite cubic-bezier(.05,-0.07,.45,1.45);
    animation-play-state: ${props => props.animationPlayStateValue};
    margin: ${props => props.wholeMarginsValue ? props.wholeMarginsValue[0] : props.yMarginValue || 0}
            ${props => props.wholeMarginsValue ? props.wholeMarginsValue[1] : props.xMarginValue || 0}
            ${props => props.wholeMarginsValue ? props.wholeMarginsValue[2] : props.yMarginValue || 0}
            ${props => props.wholeMarginsValue ? props.wholeMarginsValue[3] : props.xMarginValue || 0}
`

const LoadingPokeball = ({yMargin, xMargin, wholeMargins, animationPlayState}) => {
    return(
        <StyledImg src={Pokeball}
                    alt="Pokeball"
                    yMarginValue={yMargin}
                    xMarginValue={xMargin}
                    wholeMarginsValue={wholeMargins}
                    animationPlayStateValue={animationPlayState}
                    />
    )
}


export default LoadingPokeball