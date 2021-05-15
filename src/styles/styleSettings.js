export const breakpoints = {
  xs: 640,
  sm: 760,
  md: 992,
  lg: 1200,
  xl: 1600,
}

export const mediaQueries = (limit, key) => {
  return (style) =>
    `@media (${limit}-width: ${breakpoints[key]}px) { ${style} }`
}

export const colors = {
  red: '#E32B2B',
  darkred: '#C51A1A',
  darkyellow: '#46360C',
  lightgray: '#CCCCCC',
  gray: '#AAAAAA',
  darkgray: '#999999',
  extradarkgray: '#444444',
  white: "#FFFFFF",
}
