import { MessageEntity } from 'core/entities/message.entity'
import { useEffect, useRef } from 'react'

interface Props {
  messages: MessageEntity[]
  offset?: number
  smooth?: boolean
}

export const useAutoScroll = ({
  messages,
  offset = 0,
  smooth = false
}: Props) => {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef?.current && messages.length) {
      const lastChild = listRef.current.lastChild as HTMLDivElement
      if (
        listRef.current.scrollHeight -
          (listRef.current.offsetHeight + listRef.current.scrollTop) <=
        lastChild.offsetHeight + offset
      ) {
        lastChild.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto'
        })
      }
    }
  }, [messages])

  return listRef
}
