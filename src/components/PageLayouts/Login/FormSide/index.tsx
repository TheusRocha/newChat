import ClickableText from 'components/ClickableText'
import { useForm } from 'react-hook-form'
import * as S from './styles'

const FormSide = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.TitleContainer>
        <S.Title>Login</S.Title>
        <S.SubTitle>See you growth and get consulting support!</S.SubTitle>
      </S.TitleContainer>
      <S.FormContainer>
        <S.Label>
          Email
          <S.Input {...register('email')} />
        </S.Label>
        <S.Label>
          Senha
          <div>
            <S.Input {...register('password')} />
            <ClickableText style={{ marginTop: '4px' }}>
              Esqueceu sua senha?
            </ClickableText>
          </div>
        </S.Label>
        <S.LoginButton type="submit">Login</S.LoginButton>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default FormSide
