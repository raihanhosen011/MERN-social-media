// external imports
import Image from 'next/image'

// internal imports
import { AuthContent, AuthLeft, AuthRight } from '../../components/Auth/auth.styled'

const Index = () => {
  return (
    <AuthContent>
      <AuthLeft>
         <Image src='/images/auth-bg.jpg' width={11} height={8} layout='responsive' />             
      </AuthLeft>

      <AuthRight>
         <Image src='/images/devbook-logo.png' width={5} height={2} layout='responsive'  />
      </AuthRight>
    </AuthContent> 
  )
}

export default Index