import Dock from 'components/PageLayouts/Main/Dock'
import { Page } from 'components/Page'
import Chat from './Chat'
import MainPanel from './MainPanel'
import Sidebar from './Sidebar'
import { useRecoilState } from 'recoil'
import { useQuery } from '@apollo/client'
import { SESSIONS } from 'common/graphql/queries'
import { useToast } from '@chakra-ui/toast'
import { useEffect } from 'react'
import { sessionsState } from 'common/recoil/atoms'
import { SessionEntity } from 'core/entities/session.entity'
import { UserEntity } from 'core/entities/user.entity'

interface MainProps {
  user: UserEntity
}

const Main = ({ user }: MainProps) => {
  const toast = useToast()

  const [, setSessions] = useRecoilState(sessionsState)

  const { loading, error, data } = useQuery(SESSIONS, {
    variables: { me: user.id }
  })

  useEffect(() => {
    const onComplete = (res: { sessions: SessionEntity[] }) => {
      setSessions(res.sessions)
    }
    data && onComplete(data)
  }, [data, setSessions])

  useEffect(() => {
    const onError = (err: Error) => {
      toast({
        title: err.message,
        position: 'top-right',
        status: 'error',
        isClosable: true
      })
    }
    error && onError(error)
  }, [error, toast])

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
