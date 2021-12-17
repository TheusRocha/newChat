import { getCurrentScenario } from 'common/recoil/selectors'
import Direct from 'components/Direct'
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
import { useRecoilValue } from 'recoil'
import * as S from './styles'

const MainPanel = () => {
  const currentServer = useRecoilValue(getCurrentScenario)

  return (
    <S.Wrapper>
      <div>
        <Margin bottom="16px">
          <SearchInput />
        </Margin>
        <Profile></Profile>
      </div>

      {currentServer ? (
        <>
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
        </>
      ) : (
        <Direct />
      )}
    </S.Wrapper>
  )
}

export default MainPanel
