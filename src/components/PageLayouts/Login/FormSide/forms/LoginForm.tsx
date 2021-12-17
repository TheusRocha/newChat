import { Dispatch, SetStateAction } from 'react'
import ClickableText from 'components/ClickableText'
import ErrorMessage from 'components/ErrorMessage'
import { isValidEmail } from 'core/constants/patterns'
import { useRouter } from 'next/dist/client/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from '../styles'
import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/toast'
import { useRecoilState } from 'recoil'
import { authState, userState } from 'common/recoil/atoms'
import { LOGIN } from 'common/graphql/mutations'

interface LoginFormValues {
  email: string
  password: string
}

interface LoginFormProps {
  setRegisterForm: Dispatch<SetStateAction<boolean>>
}

const LoginForm = ({ setRegisterForm }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const toast = useToast()

  const [, setAuth] = useRecoilState(authState)
  const [, setUser] = useRecoilState(userState)

  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: (res) => {
      const { token, ...restData } = res.login
      setAuth(token)
      setUser(restData)
      router.push('main')
    },
    onError: (error) => {
      error &&
        toast({
          title: error.message,
          position: 'top-right',
          status: 'error',
          isClosable: true
        })
    }
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login({ variables: data })
  }

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
            <ClickableText style={{ marginTop: '8px' }}>
              Esqueceu sua senha?
            </ClickableText>
          </div>
        </S.Label>
        <div>
          <S.LoginButton type="submit">Login</S.LoginButton>
          <ClickableText
            style={{ marginTop: '8px' }}
            onClick={() => setRegisterForm(true)}
          >
            Ainda não tem uma conta?
          </ClickableText>
        </div>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default LoginForm
