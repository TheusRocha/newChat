import Message from 'components/Message'
import * as S from './styles'

const datamock = [
  { text: 'Thanks for the feedbacks, Richard!', user: 'Matheus' },
  { text: 'And I hate you Jimmy', user: 'Matheus' },
  {
    text: 'Dang, sorry for my late reply, anyway<br>late reply, anyway',
    user: 'Outro'
  },
  { text: 'OK', user: 'Matheus' }
]

const MessageList = () => (
  <S.Wrapper>
    {datamock.map((message, i) => (
      <Message key={i} message={message} previousMessage={datamock[i - 1]} />
    ))}
  </S.Wrapper>
)

export default MessageList
