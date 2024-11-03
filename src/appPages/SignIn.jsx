'use client'
import AuthForm from "../components/AuthForm"
import signInImg from '../assets/images/signIn.svg'

const SignIn = () => {
  const inputData = [
    {
      id: 1,
      title: 'username',
      type: 'text'
    },
    {
      id: 2,
      title: 'email',
      type: 'email'
    },
    {
      id: 3,
      title: 'phone',
      type: 'text'
    },
    {
      id: 4,
      title: 'password',
      type: 'password'
    }
  ]
  return (
    <>
      <section>
        <AuthForm image={signInImg} data={inputData} btnVal='Sign In' />
      </section>
    </>
  )
}

export default SignIn