import styled from 'styles'

export const Input = styled.input`
  height: 36px;
  width: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background: ${({ theme }) => theme.colors.background0};
  color: ${({ theme }) => theme.colors.font0};
  ::placeholder {
    color: ${({ theme }) => theme.colors.font1};
  }
`
