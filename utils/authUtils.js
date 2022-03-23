import * as Yup from "yup";
import fieldData from '../components/Auth/Field-data.json'

let loginSchema = {
   username : Yup.string().required().max(56),
   password : Yup.string().required().min(6)   
}

let signupSchema = {
   fullname : Yup.string().required(),
   username : Yup.string().required(),
   email : Yup.string().email().required(),
   password : Yup.string().required().min(6),
   confirm : Yup.string().required('Please retype your password.').oneOf([Yup.ref('password')], 'Your passwords do not match.')
}

function authUtils(slug){
   const { bigImg, logo, loginField, signupField, loginTexts, signupTexts, loginInitial, signupInitial } = fieldData

   const initial = { bigImg, logo }

   let fields = slug ? signupField : loginField
   let texts = slug ? signupTexts : loginTexts
   let initialValue = slug ? signupInitial : loginInitial
   let validation = Yup.object(slug ? signupSchema : loginSchema)

   return [initial, fields, texts, initialValue, validation] 
}

export default authUtils