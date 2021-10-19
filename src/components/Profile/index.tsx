import * as S from './styles'

const Profile = () => (
  <S.Wrapper>
    <S.ProfileImageContainer>
      <S.ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTf1nGSgVM8Oc_drnppk8wmDGZ1uUegROMw&usqp=CAU" />
    </S.ProfileImageContainer>
    <S.ProfileNameContainer>
      <S.ProfileName>Jimmy</S.ProfileName>
      <S.ProfileStatusContainer>
        <S.ProfileStatusText>#8745</S.ProfileStatusText>
      </S.ProfileStatusContainer>
    </S.ProfileNameContainer>
    <S.MoreIcon size={20} />
  </S.Wrapper>
)

export default Profile
