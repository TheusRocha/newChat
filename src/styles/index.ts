import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { Theme } from './theme'

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { css, keyframes, ThemeProvider, createGlobalStyle }
export default styled
