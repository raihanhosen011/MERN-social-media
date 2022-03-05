// external imports 
import styled from "styled-components";

// styled elements
const StyledContainer = styled.section`
  padding : var(--mb-1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > * {
    max-width: 1180px;
    margin: auto;
  }
`

export default StyledContainer