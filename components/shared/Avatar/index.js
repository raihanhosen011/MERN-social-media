import Image from "next/image";
import Link from "next/link";

import { SAvatar } from "./avatar.style";

export default function Avatar({ src, username }){
   return(
     <>
       <Link href={`/user/${username}`} >
          <SAvatar>
            <Image src={src} width={1} height={1} layout='responsive' alt={username} /> 
          </SAvatar>       
       </Link>
     </>         
   )      
}