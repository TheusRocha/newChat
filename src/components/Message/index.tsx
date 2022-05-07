import { useQuery } from '@apollo/client'
import { ME } from 'common/graphql/queries'
import { isToday, sameMinute } from 'common/helpers/date-time-helpers'
import MessageOptions from 'components/MessageOptions'
import { MessageEntity } from 'core/entities/message.entity'
import { DateTime } from 'luxon'
import { memo } from 'react'
import * as S from './styles'

interface MessageProps {
  message: MessageEntity
  previousMessage: MessageEntity
}

const Message = ({ message, previousMessage }: MessageProps) => {
  const { data } = useQuery(ME)

  const isMe = message.senderUser.id === data.me?.id

  const messageDateTime = DateTime.fromISO(message.sendAt)

  const sendSameMinute =
    previousMessage &&
    sameMinute([messageDateTime, DateTime.fromISO(previousMessage.sendAt)])

  const isFirst =
    !previousMessage ||
    previousMessage.senderUser.id !== message.senderUser.id ||
    !sendSameMinute

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
          <S.User isMe={isMe}>{message.senderUser.username}</S.User>
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

export default memo(Message)
