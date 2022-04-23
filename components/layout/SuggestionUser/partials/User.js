import React from 'react'
import { UilPlus } from '@iconscout/react-unicons'

import { SUser } from '../style'
import Avatar from '@components/shared/Avatar'
import { SUserBlock } from '@components/shared/global.styled'

function User() {
  return (
    <SUser>
       <SUserBlock>
          <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />

          <div>
             <h3>Lana Rose</h3>
             <p>@raihanhosen</p>
          </div>  
       </SUserBlock> 

       <UilPlus />
    </SUser>
  )
}

export default User