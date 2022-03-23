// external imports 
import styled from "styled-components";

// styled elements 
export const StyledTheme = styled.div.attrs(() => ({ id: "theme" }))`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   background: var(--title-color);
   position: fixed;
   bottom: 12px;
   right: 12px;
   overflow: hidden;
   z-index: 1000;

   span{
     width: 100% !important;
     height: 100% !important;
     
     img{
       object-fit: contain; 
     }
   }
`