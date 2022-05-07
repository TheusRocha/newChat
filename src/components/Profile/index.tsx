import { useQuery } from '@apollo/client'
import { ME } from 'common/graphql/queries'
import ProfileImage from 'components/ProfileImage'
import * as S from './styles'

const Profile = () => {
  const { data } = useQuery(ME)

  return (
    <S.Wrapper>
      <ProfileImage
        size={40}
        src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg"
      />
      <S.ProfileNameContainer>
        <S.ProfileName>{data.me.username}</S.ProfileName>
        <S.ProfileStatusContainer>
          <S.ProfileStatusText>#{data.me.id}</S.ProfileStatusText>
        </S.ProfileStatusContainer>
      </S.ProfileNameContainer>
      <S.MoreIcon size={20} />
    </S.Wrapper>
  )
}

export default Profile
