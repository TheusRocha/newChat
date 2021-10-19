import { KeyboardEvent, useState } from 'react'
import EmojiConvertor from 'emoji-js'
import { ContentEditableEvent } from 'react-contenteditable'
import * as S from './styles'

const emoji = new EmojiConvertor()
emoji.replace_mode = 'unified'

const UserInput = () => {
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
    console.log(value)
  }

  return (
    <S.Wrapper onChange={handleChange} onKeyDown={handleKeyDown} html={value} />
  )
}

export default UserInput
