import ContentEditable from 'components/ContentEditable'
import styled from 'styles'

export const Wrapper = styled(ContentEditable)`
  display: flex;
  align-items: center;
  min-height: 48px;
  background: ${({ theme }) => theme.colors.gray[800]};
  padding: 14px 52px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  word-wrap: break-word;
  outline: none;
  flex-shrink: 0;
  margin: 24px 48px;
`
