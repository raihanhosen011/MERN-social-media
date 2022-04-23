import { SAvatar } from "@components/shared/Avatar/avatar.style";
import styled from "styled-components";

export const SFeed = styled.div``

export const SPost = styled.div`
   background: var(--color-white);
   border-radius: var(--card-border-radius);
   padding: var(--card-padding);
   margin: 1rem 0;
   font-size: 0.85rem;
   line-height: 1.5;

   svg{
     cursor: pointer;  
   }
`

export const SPostHead = styled.div`
   display: flex;
   justify-content: space-between;
`

export const SOptions = styled.div``

export const SPostBody = styled.div``

export const SPostPhotos = styled.div`
    border-radius: var(--card-border-radius);
    overflow: hidden;
    margin: 0.7rem 0;
    height: 530px;
`

export const SPostActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 0.6rem;
    margin-bottom: 2px;
    
    svg{
        margin-right: 10px;
        color: #626262;
    }
`

export const SInteractionBtns = styled.div`
   svg{
     margin-right: 13px; 
   }
`

export const SBookmark = styled.div``

export const SPostFooter = styled.div``

export const SLikedBy = styled.div`
  display: flex;
  align-items: center;
  
  span{
    border-radius: 50%;
    margin-left: -0.5rem;
    border: 2px solid var(--color-white);
    z-index: 1;

    &:first-child{
        margin: 0;
    }

    ${SAvatar}{
      width: 1.5rem;
      cursor: pointer;
    }      
  }
  p{
    margin-left: 0.4rem;
    font-size: 14px;
    font-weight: 400;
  }
`

export const SCaption = styled.div`
  p{
    font-size: var(--normal-font-size);
    margin: 4px 0;
  }
`