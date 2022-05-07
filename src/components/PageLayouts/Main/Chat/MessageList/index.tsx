import { useQuery } from '@apollo/client'
import { MESSAGES } from 'common/graphql/queries'
import { useAutoScroll } from 'common/hooks/use-auto-scroll'
import { getCurrentSession } from 'common/recoil/selectors'
import Message from 'components/Message'
import { MessageEntity } from 'core/entities/message.entity'
import { useRecoilValue } from 'recoil'
import * as S from './styles'

const MessageList = () => {
  const currentSession = useRecoilValue(getCurrentSession)
  const { data: messagesData } = useQuery<{ messages: MessageEntity[] }>(
    MESSAGES,
    {
      variables: { sessionId: currentSession }
    }
  )
  const listRef = useAutoScroll({
    messages: messagesData?.messages || [],
    offset: 40,
    smooth: true
  })

  return (
    <S.Wrapper ref={listRef}>
      {!!messagesData?.messages?.length &&
        messagesData.messages.map((message, i) => (
          <Message
            key={i}
            message={message}
            previousMessage={messagesData.messages[i - 1]}
          />
        ))}
    </S.Wrapper>
  )
}

export default MessageList
