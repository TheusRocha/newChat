import { username } from 'common/recoil/atoms'
import ClickableText from 'components/ClickableText'
import ErrorMessage from 'components/ErrorMessage'
import { useRouter } from 'next/dist/client/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import * as S from './styles'

interface FormValues {
  email: string
  password: string
}

const FormSide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()

  const [, setName] = useRecoilState(username)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setName(data.email.split('@')[0])
    router.push('main')
  }

  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.TitleContainer>
        <S.Title>Login</S.Title>
        <S.SubTitle>See you growth and get consulting support!</S.SubTitle>
      </S.TitleContainer>
      <S.FormContainer>
        <S.Label>
          Email
          <div>
            <S.Input
              {...register('email', {
                required: 'Preencha o email por favor',
                pattern: {
                  value: isValidEmail,
                  message: 'Email com formato inválido '
                }
              })}
            />

            <ErrorMessage fieldName="email" errors={errors} />
          </div>
        </S.Label>
        <S.Label>
          Senha
          <div>
            <S.Input
              type="password"
              {...register('password', {
                required: 'Preencha a senha por favor'
              })}
            />
            <ErrorMessage fieldName="password" errors={errors} />
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
