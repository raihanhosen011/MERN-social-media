import styled from 'styled-components'

const transformAttrs = ({ alt, onClick, href, ...others }) => ({
   title: onClick || href ? alt : null,
   ...others,
});

export const BiconImg = styled.div`

` 

export const BiconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  background: transparent;  
  transition: .3s;

  @media (min-width: 700px) {
    width: 3rem;
    height: 3rem;
  }

  &:hover{

  }
`


export const IconWithCaptionContainer = () => {
  
}

export const CaptionIcon = () => {
  
}

export const IconCaption = () => {

}

export const NormalIcon = () => {

}