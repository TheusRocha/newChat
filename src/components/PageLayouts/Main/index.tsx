import Dock from 'components/PageLayouts/Main/Dock'
import { Page } from 'components/Page'
import Chat from './Chat'
import MainPanel from './MainPanel'
import Sidebar from './Sidebar'

const Main = () => (
  <Page>
    <Dock />
    <MainPanel />
    <Chat />
    <Sidebar />
  </Page>
)

export default Main
