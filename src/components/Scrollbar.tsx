import { css } from 'styles'

export const Scrollbar = css`
  &::-webkit-scrollbar-thumb {
    background: inherit;
  }

  &::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
    color: #00000000;
    transition: color 0.3s;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  & {
    overflow: overlay !important;
    &:hover {
      &::-webkit-scrollbar-thumb {
        color: #acacac8a;
      }
    }
  }
`
