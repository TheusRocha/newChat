import styled from 'styles'

export const Wrapper = styled.div<{ isMe: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  height: 22px;
  background: ${({ theme }) => theme.colors.gray[700]};
  padding: 2px;
  margin-top: 6px;
  transition: 0.2s opacity;
  ${({ isMe }) => (isMe ? 'margin-right' : 'margin-left')}: 8px;
`
