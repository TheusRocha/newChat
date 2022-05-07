import { UserEntity } from './user.entity'

export interface MessageEntity {
  text: string
  senderUser: UserEntity
  sendAt: string
}
