import { selector } from 'recoil'
import {
  currentServerState,
  messagesState,
  sessionsState,
  userState
} from './atoms'

export const getUser = selector({
  key: 'getUser',
  get: ({ get }) => {
    return get(userState)
  }
})

export const getMessages = selector({
  key: 'getMessages',
  get: ({ get }) => {
    return get(messagesState)
  }
})

export const getCurrentScenario = selector({
  key: 'getCurrentScenario',
  get: ({ get }) => {
    return get(currentServerState)
  }
})

export const getSessions = selector({
  key: 'getSessions',
  get: ({ get }) => {
    return get(sessionsState)
  }
})
