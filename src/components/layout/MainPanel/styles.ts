import styled from 'styles'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background1};
  width: 360px;
  height: 100vh;
  padding: 24px 32px;

  & > :not(:last-child) {
    margin-bottom: 32px;
  }
`
