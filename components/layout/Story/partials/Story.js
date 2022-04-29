import React from 'react'

import { SStory } from '../style'
import Avatar from '@components/shared/Avatar'

function Story() {
  return (
    <SStory background='/story/story-1.jpg' >
       <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />
       <span className='name' > Lila's story </span>
    </SStory>
  )
}

export default Story