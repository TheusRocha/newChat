import GroupChannels from 'components/GroupChannel'
import MainAction from 'components/MainAction'
import { Margin } from 'components/Margin'
import Profile from 'components/Profile'
import SearchInput from 'components/SearchInput'
import {
  AiOutlineClockCircle,
  AiOutlineUser,
  AiOutlineSetting
} from 'react-icons/ai'
import * as S from './styles'

const MainPanel = () => (
  <S.Wrapper>
    <div>
      <Margin bottom="16px">
        <SearchInput />
      </Margin>
      <Profile></Profile>
    </div>
    <div>
      <MainAction
        icon={<AiOutlineClockCircle size={24} />}
        text="All Updates"
        bubbleCount={256}
      />
      <MainAction icon={<AiOutlineUser size={24} />} text="Members" />
      <MainAction icon={<AiOutlineSetting size={24} />} text="Settings" />
    </div>
    <GroupChannels groupName="primeiro grupo" />
  </S.Wrapper>
)

export default MainPanel
