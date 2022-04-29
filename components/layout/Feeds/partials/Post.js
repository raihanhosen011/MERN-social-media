import React from 'react'

import { SPost } from '../style'

import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHead from './PostHead'

function Post() {
  return (
    <SPost>
       <PostHead />
       <PostBody /> 
       <PostFooter />
    </SPost>
  )
}

export default Post