import styled from 'styles'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[900]};
  height: 100vh;
`
