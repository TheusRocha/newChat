import styled, { css } from 'styles'

interface MarginProps {
  all?: string
  horizontal?: string
  vertical?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export const Margin = styled.div<MarginProps>`
  ${({ all }) =>
    all &&
    css`
      margin: ${all};
    `}
  ${({ horizontal }) =>
    horizontal &&
    css`
      margin-left: ${horizontal};
      margin-right: ${horizontal};
    `} 
  ${({ vertical }) =>
    vertical &&
    css`
      margin-top: ${vertical};
      margin-bottom: ${vertical};
    `} 
  ${({ top }) =>
    top &&
    css`
      margin-top: ${top};
    `} 
  ${({ right }) =>
    right &&
    css`
      margin-right: ${right};
    `} 
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: ${bottom};
    `} 
  ${({ left }) =>
    left &&
    css`
      margin-left: ${left};
    `}
`
