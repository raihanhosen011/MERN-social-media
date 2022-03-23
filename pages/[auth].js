// external imports
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// internal imports
import { AuthContent, AuthLeft, AuthRight, StyledForm } from '../components/Auth/auth.styled'

import FormField from '../components/shared/FormField'
import { Button } from '../components/shared/global.styled'
import authUtils from '../utils/authUtils'
import { signUp, signIn } from '../redux/action/authAction'

const Index = () => {
  const router = useRouter()
  const { auth } = router.query

  const { authentication } = useSelector(state => state)
  const dispatch = useDispatch()

  const [initial, fields, texts, initialValue, validation] = authUtils(auth === 'signup') 

  const handleSubmit = (value) => {
    auth === 'signup' ? dispatch(signUp(value)) : dispatch(signIn(value))
  }
  
  useEffect(() => {
     if(authentication.token){
        router.push('/')
     }
  }, [authentication])

  return (
    <AuthContent>
      <AuthLeft>
          <Image src={initial.bigImg} width={11} height={8} layout='responsive' />             
      </AuthLeft>

      <AuthRight >
          <Image className='logo' src={initial.logo} width={200} height={90} layout='responsive'  />
          <h1> {texts.title} </h1>
          <h3> {texts.subtitle} </h3>

          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValue}
            validationSchema={validation}
          >
            {formik => (
             <StyledForm>
                {Object.entries(fields).map(([key, field]) => {
                  return <FormField key={key} field={{ ...field, id: key }} />;
                })}

                <Button > {texts.buttonText} </Button>     
                <p> {texts.pera} <Link href={texts.to} > click </Link> </p>       
             </StyledForm>
            )}
          </Formik>
      </AuthRight>
    </AuthContent> 
  )
}

export default Index