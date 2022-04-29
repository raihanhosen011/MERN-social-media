import React from 'react'

import { SCreatePost } from './style'
import Avatar from '@components/shared/Avatar'

function Index() {
  return (
    <SCreatePost>
        <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />
        <input placeholder="What happend's?" name='status' />
        <button type='submit' className='btn btn-primary' >post</button>
    </SCreatePost>
  )
}

export default Index