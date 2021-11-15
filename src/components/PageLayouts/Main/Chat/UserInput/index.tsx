import { KeyboardEvent, useState } from 'react'
import EmojiConvertor from 'emoji-js'
import { ContentEditableEvent } from 'react-contenteditable'
import * as S from './styles'
import { MessageEntity } from 'core/entities/message.entity'
import { DateTime } from 'luxon'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getUserName } from 'common/recoil/selectors'
import { messages } from 'common/recoil/atoms'

const emoji = new EmojiConvertor()
emoji.replace_mode = 'unified'

const UserInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [sending, setSending] = useState('')

  const name = useRecoilValue(getUserName)
  const [value, setValue] = useRecoilState(messages)

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
        user: name,
        text: sanitizedText,
        sendAt: DateTime.now().toISO()
      })
      setSending('sending')
      setTimeout(() => {
        setSending('')
      }, 600)
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
