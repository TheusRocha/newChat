import Dock from 'components/PageLayouts/Main/Dock'
import { Page } from 'components/Page'
import Chat from './Chat'
import MainPanel from './MainPanel'
import Sidebar from './Sidebar'
import { UserEntity } from 'core/entities/user.entity'

interface MainProps {
  user: UserEntity
}

const Main = ({ user }: MainProps) => {
  return (
    <Page>
      <Dock />
      <MainPanel />
      <Chat />
      <Sidebar />
    </Page>
  )
}

export default Main
