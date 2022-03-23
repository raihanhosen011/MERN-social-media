// external imports 
import styled from "styled-components"
import { Form } from 'formik'

// styled elements
export const AuthContent = styled.div`
   display: grid;
   grid-template-columns: 1.9fr .9fr;
   min-height: 100vh;

   @media (max-width: 1200px) {
      grid-template-columns: 1.5fr 1.5fr;
   }
   
   @media (max-width: 980px) {
      grid-template-columns: 1fr;
   }
`

export const AuthLeft = styled.div`
   @media (max-width: 980px) {
     display: none;
   }
`

export const AuthRight = styled.div`
  text-align: center;
  padding: var(--mb-1);

  & > span{
    max-width: 170px;
    margin: auto !important; 
  }

  h1{
    font-size: var(--h2-font-size);
  }
  
  h3{
    color: var(--text-color);
    margin-top: -3px;
    font-weight: 500;
    font-size: var(--normal-font-size)
  }
`

export const StyledForm = styled(Form).attrs(() => ({ id : "registation-form" }))`
  text-align: start;
  margin-top: var(--mb-1);

  button{
    width: 100%;
  }

  & > p{
    text-align: center;
  }
`