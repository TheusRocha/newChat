import styled from 'styles'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.gray[800]};
  width: 320px;
  height: 100vh;
  padding: 24px 32px;

  & > :not(:last-child) {
    margin-bottom: 32px;
  }
`
