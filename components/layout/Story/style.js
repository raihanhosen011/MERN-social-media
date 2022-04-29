import styled from "styled-components";

export const SStories = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   gap: 15px;
   height: 10rem; 
`

export const SStory = styled.div`
   padding: var(--card-padding);
   border-radius: var(--card-border-radius); 
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   align-items: center;
   color: white;
   font-size: .75rem;
   height: 100%;
   position: relative;
   overflow: hidden;
   background: white;
   ${({ background }) => `background-image: url(${background})`};
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

   &::before{
      content: "";
      display: block;
      width: 100%;
      height: 4rem;
      position: absolute;
      bottom: 0;
      background: linear-gradient(0deg, black, transparent);
   }

   .name{
      z-index: 2;
   }
`