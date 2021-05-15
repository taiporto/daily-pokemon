export const createColorStats = (hexValue) => {
    const splitHex = hexValue.match(/[a-f0-9]{1,2}/gi)
  
    return splitHex.reduce(
      (acc, pair) => {
        if (/[0-3]/.test(pair)) {
          return [acc[0] + 1, acc[1], acc[2]]
        } else if (/[d-f]/.test(pair)) {
          return [acc[0], acc[1] + 1, acc[2]]
        } else {
          return [acc[0], acc[1], acc[2] + 1]
        }
      },
      [0, 0, 0]
    )
  }
  
export const getColorDefinition = (hexColor) => {
    const colorStatsArray = createColorStats(hexColor)
  
    let indexOfHighestValue = colorStatsArray.indexOf(
      Math.max(...colorStatsArray)
    )
  
    switch (indexOfHighestValue) {
      case 0:
        return "dark"
      case 1:
        return "light"
      case 2:
      default:
        return "neutral"
    }
  }