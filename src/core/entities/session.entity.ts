import { MessageEntity } from './message.entity'
import { UserEntity } from './user.entity'

export interface SessionEntity {
  id: string
  isPrivate: boolean
  name: string
  messages: MessageEntity[]
  users: UserEntity[]
}
