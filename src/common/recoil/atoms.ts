import { SessionEntity } from 'core/entities/session.entity'
import { atom } from 'recoil'

export const sessionsState = atom<SessionEntity[]>({
  key: 'sessions',
  default: []
})

export const currentServerState = atom<string>({
  key: 'currentServer',
  default: ''
})

export const messagesState = atom({
  key: 'messages',
  default: [
    {
      text: 'Thanks for the feedbacks, Richard!',
      user: {
        id: '1',
        email: 'mat-he@hotmail.com',
        username: 'Matheus'
      },
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'And I hate you Jimmy',
      user: {
        id: '1',
        email: 'mat-he@hotmail.com',
        username: 'Matheus'
      },
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'Dang, sorry for my late reply, anyway<br>late reply, anyway',
      user: {
        id: '2',
        email: 'outro@outro.com',
        username: 'Outro'
      },
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'OK',
      user: {
        id: '1',
        email: 'mat-he@hotmail.com',
        username: 'Matheus'
      },
      sendAt: '2017-09-14T03:21:47.070-04:00'
    }
  ]
})
