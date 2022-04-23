import styled from 'styled-components'

export const SSidebar = styled.div``

export const SSidebarNav = styled.div``

export const SSidebarNavItem = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  gap: 7px;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;
  font-weight: 500;
  border-bottom: 1px solid hsl(0deg 0% 93%);

  svg{
    min-width: 21px;
    max-width: 21px;
    color: var(--color-gray);
    margin-left: 1.5rem;
    position: relative;
  }

  &.active-nav{
    background: var(--color-light);

    svg, span{
      color: var(--color-primary);
    }

    &::before{
      content: "";
      display: block;
      width: 0.5rem;
      height: 100%;
      position: absolute;
      background: var(--color-primary);
    }
  }

  &:first-child{
    &.active-nav{
      border-top-left-radius: var(--card-border-radius);
      overflow: hidden;
    } 
  }

  &:last-child{
    &.active-nav{
      border-bottom-left-radius: var(--card-border-radius);
      overflow: hidden;
    } 
  }
`

export const SSidebarNavLists = styled.div`
  margin-top: 1rem;
  background: var(--color-white);
  border-radius: var(--card-border-radius);
`

export const SProfile = styled.div`
   padding: var(--card-padding);
   background: var(--color-white);
   border-radius: var(--card-border-radius);
   cursor: pointer;
   display: flex;
   align-items: center;
   column-gap: 12px;

   & > div{
     h4 {
       margin-bottom: -2px;
     }
   }
`