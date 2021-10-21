import * as S from './styles'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import UserInput from './UserInput'
import { useState } from 'react'
import { MessageEntity } from 'core/entities/message.entity'

const Chat = () => {
  const [messages, setMessages] = useState<MessageEntity[]>([
    {
      text: 'Thanks for the feedbacks, Richard!',
      user: 'Matheus',
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'And I hate you Jimmy',
      user: 'Matheus',
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'Dang, sorry for my late reply, anyway<br>late reply, anyway',
      user: 'Outro',
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    { text: 'OK', user: 'Matheus', sendAt: '2017-09-14T03:21:47.070-04:00' }
  ])
  return (
    <S.Wrapper>
      <ChatHeader />
      <MessageList messages={messages} />
      <UserInput
        addMessage={(newMessage: MessageEntity) =>
          setMessages([...messages, newMessage])
        }
      />
    </S.Wrapper>
  )
}

export default Chat
