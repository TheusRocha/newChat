import { Scrollbar } from 'components/Scrollbar'
import styled from 'styles'

export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0 16px;
  margin: 0 32px;
  ${Scrollbar}
`
