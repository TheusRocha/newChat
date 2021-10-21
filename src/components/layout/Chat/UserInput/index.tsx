import { KeyboardEvent, useState } from 'react'
import EmojiConvertor from 'emoji-js'
import { ContentEditableEvent } from 'react-contenteditable'
import * as S from './styles'
import { MessageEntity } from 'core/entities/message.entity'
import { DateTime } from 'luxon'

const emoji = new EmojiConvertor()
emoji.replace_mode = 'unified'

interface UserInputProps {
  addMessage: (newMessage: MessageEntity) => void
}

const UserInput = ({ addMessage }: UserInputProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: ContentEditableEvent) => {
    setValue(emoji.replace_colons(e.target.value))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  const onSubmit = () => {
    const sanitizedText = value.replace(/&nbsp;/g, ' ').trim()
    sanitizedText &&
      addMessage({
        user: 'Matheus',
        text: sanitizedText,
        sendAt: DateTime.now().toISO()
      })
    setValue('')
  }

  return (
    <S.Wrapper onChange={handleChange} onKeyDown={handleKeyDown} html={value} />
  )
}

export default UserInput
