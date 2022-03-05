// external imports
import Image from 'next/image'

// internal imports
import { AuthContent, AuthLeft, AuthRight } from './auth.styled'

const Index = () => {
  return (
    <AuthContent>
      <AuthLeft>
         <Image src='/images/auth-bg.jpg' width={10} height={8} layout='responsive' />             
      </AuthLeft>

      <AuthRight>
         <h1> Hello </h1>
      </AuthRight>
    </AuthContent>
  )
}

export default Index