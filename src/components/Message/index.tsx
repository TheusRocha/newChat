import { isToday, sameMinute } from 'common/helpers/date-time-helpers'
import MessageOptions from 'components/MessageOptions'
import { MessageEntity } from 'core/entities/message.entity'
import { DateTime } from 'luxon'
import * as S from './styles'

interface MessageProps {
  message: MessageEntity
  previousMessage: MessageEntity
}

export const Message = ({ message, previousMessage }: MessageProps) => {
  const isMe = message.user === 'Matheus'

  const messageDateTime = DateTime.fromISO(message.sendAt)

  const sendSameMinute =
    previousMessage &&
    sameMinute([messageDateTime, DateTime.fromISO(previousMessage.sendAt)])

  const isFirst =
    !previousMessage || previousMessage.user !== message.user || !sendSameMinute

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
          <S.Time>
            {messageDateTime.toLocaleString(
              isToday(messageDateTime)
                ? DateTime.TIME_SIMPLE
                : DateTime.DATETIME_SHORT
            )}
          </S.Time>
        </S.FirstMessageHeader>
      )}
      <S.MessageBubbleContainer isMe={isMe}>
        <S.MessageBubble
          isFirst={isFirst}
          isMe={isMe}
          dangerouslySetInnerHTML={{ __html: message.text }}
        />
        <MessageOptions isMe={isMe} />
      </S.MessageBubbleContainer>
    </S.Wrapper>
  )
}

export default Message
