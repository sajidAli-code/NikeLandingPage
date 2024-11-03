import AuthForm from "../components/AuthForm"
import logInImg from '../assets/images/logIn.svg'

const LogIn = () => {
  const inputData = [
    {
      id: 1,
      title: 'Email',
      type: 'email'
    },
    {
      id: 2,
      title: 'Password',
      type: 'password'
    }
  ]
  return (
    <>
      <section>
        <AuthForm image={logInImg} data={inputData} btnVal='Log In' />
      </section>
    </>
  )
}

export default LogIn