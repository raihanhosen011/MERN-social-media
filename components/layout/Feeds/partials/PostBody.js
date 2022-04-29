import Image from 'next/image'
import React from 'react'
import { UilHeart, UilCommentAltDots, UilShare, UilBookmark } from '@iconscout/react-unicons'

import { SPostPhotos, SPostBody, SPostActions, SInteractionBtns, SBookmark, SCaption } from '../style'

function PostBody() {
  return (
    <SPostBody>
       <SCaption>
          <p>lorem ipsum dolor sit amit ...</p>
       </SCaption> 

       <SPostPhotos>
          <Image src='/feed/post-1.jpg' width={1} height={1} layout='responsive' />   
       </SPostPhotos>     

       <SPostActions>
           <SInteractionBtns>
               <UilHeart />
               <UilCommentAltDots />
               <UilShare />
           </SInteractionBtns>
       
           <SBookmark>
              <UilBookmark />
           </SBookmark> 
       </SPostActions>
    </SPostBody>
  )
}

export default PostBody