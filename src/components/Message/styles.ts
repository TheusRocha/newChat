import styled, { css } from 'styles'

export const Wrapper = styled.div<{ isMe: boolean; isFirst: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${({ isFirst }) => (isFirst ? '24px' : '0')} 52px 0;
  ${({ isMe }) => isMe && 'justify-content: end'};
  padding: 4px 0;
`

export const MessageBubbleContainer = styled.div<{ isMe: boolean }>`
  display: flex;
  flex-direction: ${({ isMe }) => (isMe ? 'row-reverse' : 'row')};
`

export const Image = styled.img<{ isMe: boolean }>`
  position: absolute;
  top: 0;
  ${({ isMe }) => (isMe ? 'right' : 'left')}: -48px;
  border-radius: 10px;
  width: 32px;
  height: 32px;
`

export const FirstMessageHeader = styled.div<{ isMe: boolean }>`
  display: flex;
  align-items: end;
  flex-direction: ${({ isMe }) => (isMe ? 'row-reverse' : 'row')};
  margin-bottom: 8px;
`

export const User = styled.div<{ isMe: boolean }>`
  line-height: 80%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ isMe }) => (isMe ? 'margin-left: 10px' : 'margin-right: 10px')};
`

export const Time = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 80%;
  color: ${({ theme }) => theme.colors.font1};
`

export const MessageBubble = styled.div<{
  isMe: boolean
  isFirst: boolean
}>`
  ${({ isMe }) =>
    isMe
      ? css`
          border-radius: 16px 0 16px 16px;
        `
      : css`
          border-radius: 0 16px 16px;
        `};
  padding: 8px 16px;
  word-break: break-word;
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ isMe }) =>
    isMe
      ? css`
          background: ${({ theme }) => theme.colors.blue};
          color: white;
        `
      : css`
          background-color: #27292d;
          color: ${({ theme }) => theme.colors.font0};
        `};
`
