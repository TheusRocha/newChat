import { atom } from 'recoil'

export const currentSessionState = atom<string>({
  key: 'currentSession',
  default: ''
})

export const currentServerState = atom<string>({
  key: 'currentServer',
  default: ''
})
