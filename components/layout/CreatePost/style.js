import styled from "styled-components";

export const SCreatePost = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  background: var(--color-white);
  padding: 0.5rem;
  border-radius: var(--border-radius);

  input{
    flex: auto;
    background: transparent;
    padding-left: 1rem;
    color: var(--color-dark);
    margin-right: 1rem;  
  }
`