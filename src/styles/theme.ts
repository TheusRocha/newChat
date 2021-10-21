interface Colors {
  background0: string
  background1: string
  background2: string
  background3: string
  background4: string
  font0: string
  font1: string
  blue: string
  green: string
  red: string
  yellow: string
}

interface FontSizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export interface Theme {
  colors: Colors
  fonts: string[]
  fontSizes: FontSizes
}

export const theme: Theme = {
  colors: {
    background0: '#141617',
    background1: '#181A1C',
    background2: '#1C1E1F',
    background3: '#202227',
    background4: '#292B2F',
    font0: '#D4D4D6',
    font1: '#838383',
    blue: '#0a66c2',
    green: '#3BA55D',
    red: '#ED4245',
    yellow: '#FAA81A'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    xs: '0.8em',
    sm: '1em',
    md: '1.4em',
    lg: '2em',
    xl: '3em'
  }
}
