import React from 'react'
import { UilEllipsisV } from '@iconscout/react-unicons'

import { SOptions, SPostHead } from '../style'
import { SUserBlock } from '@components/shared/global.styled'
import Avatar from '@components/shared/Avatar'

function PostHead() {
  return (
    <SPostHead>
       <SUserBlock>
          <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />

          <div>
             <h3>Lana Rose</h3>
             <small>Dubai, 15 minite ago</small>
          </div>  
       </SUserBlock> 

       <SOptions>
          <UilEllipsisV />  
       </SOptions>
    </SPostHead>
  )
}

export default PostHead