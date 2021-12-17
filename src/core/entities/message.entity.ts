import { UserEntity } from './user.entity'

export interface MessageEntity {
  text: string
  user: UserEntity
  sendAt: string
}
