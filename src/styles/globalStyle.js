import { createGlobalStyle } from 'styled-components'

import {colors} from './styleSettings'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, html, #root{
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 16px;
    background: radial-gradient(farthest-corner, rgba(252, 232, 51, 0.75) 42.12%, rgba(255, 203, 17, 0.705) 100%), #FFF171;
    background-size: 100% 100%;
    color: ${colors.darkyellow};
  }
  main {
    height: 100%;
  }
  h1, h2, h3, h4{
    font-weight: 600;
  }
`;

export const GrommetStyle = {
  global:{
    colors:{
      brand: colors.red,
    },
    hover:{
      background:{
        "color": "active",
        "opacity": "medium"
      }
    }
  },
  text:{
    "small":{
      size:".9rem"
    },
    "medium":{
      size: "1rem"
    },
    "large":{
      size: "1.2rem"
    }
  },
  button:{
    default:{
      padding:{
        vertical: "15px",
        horizontal: "20px"
      },
      color: colors.white,
      font:{
        size: "large",
        weight: 600
      },
      background:{
        color: colors.red
      }
    },
    border:{
      radius: "10px"
    },
    hover:{
      background:{
        color: colors.darkred
      }
    }
  },
  formField:{
    text:{
      size: "normal"
    }
  },
  select:{
    background: colors.white,
    options:{
      container:{
        background: colors.white,
      }
    }
  },
  grommet:{
    extend:{
      lineHeight: "29.7px"
    },
  },
}