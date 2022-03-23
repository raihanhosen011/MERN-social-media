// external imports
import styled from "styled-components";

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