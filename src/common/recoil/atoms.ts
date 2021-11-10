import { atom } from 'recoil'

export const username = atom({
  key: 'username',
  default: ''
})

export const messages = atom({
  key: 'messages',
  default: [
    {
      text: 'Thanks for the feedbacks, Richard!',
      user: 'Matheus',
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'And I hate you Jimmy',
      user: 'Matheus',
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    {
      text: 'Dang, sorry for my late reply, anyway<br>late reply, anyway',
      user: 'Outro',
      sendAt: '2017-09-14T03:21:47.070-04:00'
    },
    { text: 'OK', user: 'Matheus', sendAt: '2017-09-14T03:21:47.070-04:00' }
  ]
})
