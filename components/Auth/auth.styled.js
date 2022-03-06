// external imports 
import styled from "styled-components"

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

`