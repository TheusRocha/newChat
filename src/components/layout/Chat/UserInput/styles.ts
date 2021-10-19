import ContentEditable from 'components/ContentEditable'
import styled from 'styles'

export const Wrapper = styled(ContentEditable)`
  display: flex;
  align-items: center;
  min-height: 48px;
  background: ${({ theme }) => theme.colors.background4};
  padding: 14px 52px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  word-wrap: break-word;
  outline: none;
  flex-shrink: 0;
`
