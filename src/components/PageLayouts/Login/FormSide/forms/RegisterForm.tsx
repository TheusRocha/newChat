import { Dispatch, SetStateAction } from 'react'
import ClickableText from 'components/ClickableText'
import ErrorMessage from 'components/ErrorMessage'
import { isValidEmail } from 'core/constants/patterns'
import { useRouter } from 'next/dist/client/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from '../styles'
import { useToast } from '@chakra-ui/toast'
import { useMutation } from '@apollo/client'
import { REGISTER } from 'common/graphql/mutations'
import { setCookie } from 'common/helpers/cookies'

interface RegisterFormValues {
  email: string
  password: string
  username: string
}

const EXPIRATION_TIME = 604800 // 1 week

interface RegisterFormProps {
  setRegisterForm: Dispatch<SetStateAction<boolean>>
}

const RegisterForm = ({ setRegisterForm }: RegisterFormProps) => {
  const router = useRouter()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [registerUser, { loading }] = useMutation(REGISTER, {
    onCompleted: (res) => {
      const { token } = res.register
      setCookie('token', token, EXPIRATION_TIME)
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

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    registerUser({ variables: data })
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.TitleContainer>
        <S.Title>Criar uma conta</S.Title>
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
          Nome de usuário
          <div>
            <S.Input
              {...register('username', {
                required: 'Preencha o nome de usuário por favor'
              })}
            />
            <ErrorMessage fieldName="username" errors={errors} />
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
          </div>
        </S.Label>
        <div>
          <S.LoginButton type="submit">Continuar</S.LoginButton>
          <ClickableText
            style={{ marginTop: '8px' }}
            onClick={() => setRegisterForm(false)}
          >
            Já tem uma conta?
          </ClickableText>
        </div>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default RegisterForm
