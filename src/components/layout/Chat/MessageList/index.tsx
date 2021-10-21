import { useAutoScroll } from 'common/hooks/use-auto-scroll'
import Message from 'components/Message'
import { MessageEntity } from 'core/entities/message.entity'
import * as S from './styles'

interface MessageListProps {
  messages: MessageEntity[]
}

const MessageList = ({ messages }: MessageListProps) => {
  const listRef = useAutoScroll({ messages, offset: 40, smooth: true })

  return (
    <S.Wrapper ref={listRef}>
      {messages.map((message, i) => (
        <Message key={i} message={message} previousMessage={messages[i - 1]} />
      ))}
    </S.Wrapper>
  )
}

export default MessageList
