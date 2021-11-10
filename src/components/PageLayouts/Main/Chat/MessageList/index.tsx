import { useAutoScroll } from 'common/hooks/use-auto-scroll'
import { getMessages } from 'common/recoil/selectors'
import Message from 'components/Message'
import { useRecoilValue } from 'recoil'
import * as S from './styles'

const MessageList = () => {
  const messages = useRecoilValue(getMessages)
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
