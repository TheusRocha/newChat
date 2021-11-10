import styled from 'styles'

export const Wrapper = styled.section`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  width: 80px;
  height: 100vh;
`
