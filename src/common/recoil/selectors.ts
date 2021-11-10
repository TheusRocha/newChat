import { selector } from 'recoil'
import { messages, username } from './atoms'

export const getUserName = selector({
  key: 'getUserName',
  get: ({ get }) => {
    return get(username)
  }
})

export const getMessages = selector({
  key: 'getMessages',
  get: ({ get }) => {
    return get(messages)
  }
})
