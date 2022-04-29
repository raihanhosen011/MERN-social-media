// external imports
import styled from "styled-components";
import StyledContainer from "./Container/style";

// styled Elements
export const Button = styled.button.attrs(() => ({
    type: "submit",
  }))`
    justify-self: center;
    margin-top: var(--mb-1);
    margin-bottom: var(--mb-0-5);
    padding: var(--mb-0-5) var(--mb-1);
    display: block;
    color: white;
    background: var(--first-color);
    border-radius: var(--radius-sm);
    border: none;
    outline: none;
    cursor: pointer;
    font-size: var(--normal-font-size);
    width: fit-content;
  
    &:hover {
      background: var(--first-color-alt);
    }
`

export const Columns = styled.div.attrs(() => ({
  className: "columns",
}))``

export const Column = styled.div.attrs(() => ({
  className: "column",
}))``

export const SUserBlock = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   font-size: .9rem;
   
   h3{
     font-weight: 500;
   }

   p{
     color: var(--color-gray);
   }
   
   small{
     font-size: 14px;
     color: #5c5c5c;
   }
`