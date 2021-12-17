import { selector } from 'recoil'
import { currentServerState, messagesState, sessionsState } from './atoms'

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
