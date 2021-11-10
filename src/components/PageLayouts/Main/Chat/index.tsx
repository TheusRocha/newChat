import * as S from './styles'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import UserInput from './UserInput'

const Chat = () => {
  return (
    <S.Wrapper>
      <ChatHeader />
      <MessageList />
      <UserInput />
    </S.Wrapper>
  )
}

export default Chat
