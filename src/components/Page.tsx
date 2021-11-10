import styled from 'styles'

export const Page = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.gray[200]};
  width: 100vw;
  height: 100vh;
`
