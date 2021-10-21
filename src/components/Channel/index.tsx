import * as S from './styles'
import { HiHashtag } from 'react-icons/hi'
import { BiUserVoice } from 'react-icons/bi'
import { ChannelEntity, ChannelTypes } from 'core/entities/channel.entity'

interface ChannelProps {
  channel: ChannelEntity
}

const channelIcon = {
  [ChannelTypes.voice]: <BiUserVoice size={24} />,
  [ChannelTypes.text]: <HiHashtag size={24} />
}

const Channel = ({ channel }: ChannelProps) => (
  <S.Wrapper>
    <S.ChannelHeader>
      {channelIcon[channel.type]}
      <S.ChannelText>{channel.name}</S.ChannelText>
    </S.ChannelHeader>
    {channel.type === ChannelTypes.voice &&
      channel.users.map((_, i) => (
        <S.VoiceChannelUser key={i}>
          <S.UserImage src="https://help.blackboard.com/sites/default/files/images/2019-06/ultra_instr_profile_edits_settings_0.png" />
          <S.ChannelText>Pessoa 1</S.ChannelText>
        </S.VoiceChannelUser>
      ))}
  </S.Wrapper>
)

export default Channel
