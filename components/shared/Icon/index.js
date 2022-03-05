import { BiconContainer, BiconImg,IconWithCaptionContainer, CaptionIcon, IconCaption, NormalIcon } from "./icon.styled"
import Link from "next/link";

// This icon with background
const BIcon = (props) => {
   const body = (
     <BiconContainer>
        <BiconImg {...props} />
     </BiconContainer>
   )
   
   if (props.href) return <Link href={props.href} > {body} </Link> 
   else return body 
}

// this is normal icon
export const Icon = (props) => {
  return <NormalIcon {...props} />
} 

// this icon used to icon with caption
export const IconWithCaption = (props) => {
  const body = (
    <IconWithCaptionContainer>
       <CaptionIcon {...props} />
       <IconCaption caption={props.caption} />
    </IconWithCaptionContainer>
  )

  if (props.href) return  <Link href={props.href} > {body} </Link>      
  return body
}

export default BIcon