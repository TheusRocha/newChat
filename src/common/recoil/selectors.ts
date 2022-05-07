import { selector } from 'recoil'
import { currentServerState, currentSessionState } from './atoms'

export const getCurrentScenario = selector({
  key: 'getCurrentScenario',
  get: ({ get }) => {
    return get(currentServerState)
  }
})

export const getCurrentSession = selector({
  key: 'getCurrentSession',
  get: ({ get }) => {
    return get(currentSessionState)
  }
})
