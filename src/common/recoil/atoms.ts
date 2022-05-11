import { atom } from 'recoil'

export const currentSessionState = atom<string>({
  key: 'currentSession',
  default: ''
})

export const currentServerState = atom<string>({
  key: 'currentServer',
  default: ''
})

export const authState = atom<string>({
  key: 'auth',
  default: ''
})

export const userState = atom<string>({
  key: 'user',
  default: ''
})
