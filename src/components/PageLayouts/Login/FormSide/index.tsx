import { useState } from 'react'
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'

const FormSide = () => {
  const [registerForm, setRegisterForm] = useState(false)

  return registerForm ? (
    <RegisterForm setRegisterForm={setRegisterForm} />
  ) : (
    <LoginForm setRegisterForm={setRegisterForm} />
  )
}

export default FormSide
