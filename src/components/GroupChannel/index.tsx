import * as S from './styles'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Margin } from 'components/Margin'
import { ChannelTypes } from 'core/entities/channel.entity'
import Channel from 'components/Channel'
import { useState } from 'react'

interface GroupChannelsProps {
  groupName: string
}

const GroupChannels = ({ groupName }: GroupChannelsProps) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <S.Wrapper>
      <S.Header>
        <Margin right="8px">
          <MdKeyboardArrowDown
            onClick={() => setCollapsed(!collapsed)}
            size={20}
          />
        </Margin>
        {groupName}
      </S.Header>
      <S.Panel collapsed={collapsed}>
        <Channel
          channel={{
            name: 'Canal de texto',
            type: ChannelTypes.text,
            users: []
          }}
        />
        <Channel
          channel={{
            name: 'Canal de voz',
            type: ChannelTypes.voice,
            users: []
          }}
        />
        <Channel
          channel={{ name: 'Canal extra', type: ChannelTypes.text, users: [] }}
        />
        <Channel
          channel={{ name: 'Canal extra', type: ChannelTypes.voice, users: [] }}
        />
        <Channel
          channel={{ name: 'Canal extra', type: ChannelTypes.voice, users: [] }}
        />
        <Channel
          channel={{ name: 'Canal extra', type: ChannelTypes.voice, users: [] }}
        />
      </S.Panel>
    </S.Wrapper>
  )
}

export default GroupChannels
