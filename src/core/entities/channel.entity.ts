import { VoiceChannelUserEntity } from './voice-channel-user.entity'

export enum ChannelTypes {
  voice,
  text
}

export interface ChannelEntity {
  name: string
  type: ChannelTypes
  users: VoiceChannelUserEntity[]
}
