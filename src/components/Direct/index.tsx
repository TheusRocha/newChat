import { useQuery } from '@apollo/client'
import { ME, SESSIONS } from 'common/graphql/queries'
import { currentSessionState } from 'common/recoil/atoms'
import ProfileImage from 'components/ProfileImage'
import { SessionEntity } from 'core/entities/session.entity'
import { useRecoilState } from 'recoil'
import * as S from './styles'

const Direct = () => {
  const { data: meData } = useQuery(ME)
  const [currentSession, setCurrentSession] =
    useRecoilState(currentSessionState)
  const {
    loading,
    error,
    data: sessionsData
  } = useQuery<{ sessions: SessionEntity[] }>(SESSIONS, {
    variables: { me: meData.me.id }
  })

  return (
    <S.Wrapper>
      {!!sessionsData?.sessions?.length &&
        sessionsData.sessions.map((session) => (
          <S.UserContainer
            $active={session.id === currentSession}
            onClick={() => setCurrentSession(session.id)}
            key={session.id}
          >
            <ProfileImage src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg" />
            <span style={{ marginLeft: '8px' }}>
              {
                session.users.find((user) => user.id !== meData.me?.id)
                  ?.username
              }
            </span>
          </S.UserContainer>
        ))}
    </S.Wrapper>
  )
}

export default Direct
