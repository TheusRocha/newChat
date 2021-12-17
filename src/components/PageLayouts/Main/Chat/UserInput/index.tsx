import { KeyboardEvent, useState } from 'react'
import EmojiConvertor from 'emoji-js'
import { ContentEditableEvent } from 'react-contenteditable'
import * as S from './styles'
import { MessageEntity } from 'core/entities/message.entity'
import { DateTime } from 'luxon'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getUser } from 'common/recoil/selectors'
import { messagesState } from 'common/recoil/atoms'

const emoji = new EmojiConvertor()
emoji.replace_mode = 'unified'

const UserInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [sending, setSending] = useState('')

  const user = useRecoilValue(getUser)
  const [value, setValue] = useRecoilState(messagesState)

  const addMessage = (newvalue: MessageEntity) => {
    setValue([...value, newvalue])
  }

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
      addMessage({
        user: user,
        text: sanitizedText,
        sendAt: DateTime.now().toISO()
      })
      setSending('sending')
      setTimeout(() => {
        setSending('')
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
      <S.SendMessageIcon className={sending} onClick={onSubmit} />
    </S.Wrapper>
  )
}

export default UserInput
