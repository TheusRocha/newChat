import { useQuery } from '@apollo/client'
import { ME } from 'common/graphql/queries'
import { getSessions } from 'common/recoil/selectors'
import ProfileImage from 'components/ProfileImage'
import { useRecoilValue } from 'recoil'
import * as S from './styles'

const Direct = () => {
  const sessions = useRecoilValue(getSessions)
  const { data } = useQuery(ME)
  return (
    <S.Wrapper>
      {sessions.map((session) => (
        <S.UserContainer key={session.id}>
          <ProfileImage src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg" />
          <span style={{ marginLeft: '8px' }}>
            {session.users.find((user) => user.id !== data.me?.id)?.username}
          </span>
        </S.UserContainer>
      ))}
    </S.Wrapper>
  )
}

export default Direct
