import styled from "styled-components";
import StyledContainer from "@components/shared/Container/style";

export const SHeader = styled.nav`
    width: 100%;
    background: var(--color-white);
    padding: 0.6rem 0;
    position: fixed;
    top: 0;
    z-index: 10;  

    ${StyledContainer}{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const SSearchBar = styled.div`
    display: flex;
    align-items: center;
    background: var(--color-light);
    border-radius: var(--border-radius);
    padding: var(--search-padding);

    input[type="search"]{
      background: transparent;
      width: 30vw;
      margin-left: 0.6rem;
      font-size: 0.9rem;
      color: var(--color-dark);  
    }
    input[type="search"]::placeholder{
      color: var(--color-gray);  
    }
    
    svg{
       min-width: 17px;
       max-width: 17px;
       min-height: 17px;
       max-height: 17px;
       color: hsl(252deg 3% 50%);
    }
`

export const SCreate = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;  
`