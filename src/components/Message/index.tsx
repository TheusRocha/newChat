import * as S from './styles'

interface MessageProps {
  message: any
  previousMessage: any
}

export const Message = ({ message, previousMessage }: MessageProps) => {
  const isMe = message.user === 'Matheus'
  const isFirst = !previousMessage || previousMessage.user !== message.user

  return (
    <S.Wrapper isFirst={isFirst} isMe={isMe}>
      {isFirst && (
        <S.Image
          isMe={isMe}
          src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg"
        />
      )}
      {isFirst && (
        <S.FirstMessageHeader isMe={isMe}>
          <S.User isMe={isMe}>{message.user}</S.User>
          <S.Time>10:40 PM</S.Time>
        </S.FirstMessageHeader>
      )}
      <S.MessageBubbleContainer isMe={isMe}>
        <S.MessageBubble
          isFirst={isFirst}
          isMe={isMe}
          dangerouslySetInnerHTML={{ __html: message.text }}
        />
      </S.MessageBubbleContainer>
    </S.Wrapper>
  )
}

export default Message
