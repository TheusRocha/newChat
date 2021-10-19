import Dock from 'components/layout/Dock'
import Chat from './Chat'
import MainPanel from './MainPanel'
import Sidebar from './Sidebar'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Dock />
    <MainPanel />
    <Chat />
    <Sidebar />
  </S.Wrapper>
)

export default Main
