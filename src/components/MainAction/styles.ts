import styled from 'styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`
export const MainActionText = styled.span`
  margin-left: 16px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 3px;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`
