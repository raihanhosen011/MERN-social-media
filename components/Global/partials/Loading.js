import React from 'react'
import Image from 'next/image'

import { LoadingImage, LoadingStyle } from '../style'

function Loading() {
  return (
    <LoadingStyle>
       
       <LoadingImage>
          <Image src='/gifs/loading-buffering.gif' width={1} height={1} layout='responsive' alt='loading-gif' />        
       </LoadingImage>

    </LoadingStyle>
  )
}

export default Loading