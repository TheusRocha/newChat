import { KeyboardEvent, useState } from 'react'
import EmojiConvertor from 'emoji-js'
import { ContentEditableEvent } from 'react-contenteditable'
import * as S from './styles'
import { MessageEntity } from 'core/entities/message.entity'
import { DateTime } from 'luxon'
import { ME, MESSAGES } from 'common/graphql/queries'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useRecoilValue } from 'recoil'
import { getCurrentSession } from 'common/recoil/selectors'
import { SEND_MESSAGE } from 'common/graphql/mutations'

const emoji = new EmojiConvertor()
emoji.replace_mode = 'unified'

const UserInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [sending, setSending] = useState(false)
  const currentSession = useRecoilValue(getCurrentSession)

  const { data: dataMe } = useQuery(ME)
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    update(cache, { data: { sendMessage } }) {
      cache.modify({
        fields: {
          messages(existingMessages = []) {
            const newMessageRef = cache.writeFragment({
              data: sendMessage,
              fragment: gql`
                fragment NewMessage on Message {
                  id
                  type
                }
              `
            })
            return [...existingMessages, newMessageRef]
          }
        }
      })
    }
  })

  const handleChange = (e: ContentEditableEvent) => {
    setInputValue(emoji.replace_colons(e.target.value))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  const onSubmit = () => {
    const sanitizedText = inputValue.replace(/&nbsp;/g, ' ').trim()
    if (sanitizedText) {
      sendMessage({
        variables: {
          text: sanitizedText,
          senderUserId: dataMe.me.id,
          sessionId: currentSession,
          sendAt: DateTime.now().toISO(),
          quoteMessageId: null
        }
      })
      setSending(true)
      setTimeout(() => {
        setSending(false)
      }, 400)
    }
    setInputValue('')
  }

  return (
    <S.Wrapper>
      <S.UserInputField
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        html={inputValue}
      />
      <S.SendMessageIcon
        className={sending ? 'sending' : ''}
        onClick={onSubmit}
      />
    </S.Wrapper>
  )
}

export default UserInput
