import { StringValueNode } from 'graphql'
import { UserEntity } from './user.entity'

export interface SessionEntity {
  id: string
  isPrivate: boolean
  name: StringValueNode
  users: UserEntity[]
}
