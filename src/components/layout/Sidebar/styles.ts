import styled from 'styles'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background1};
  width: 320px;
  height: 100vh;
`
