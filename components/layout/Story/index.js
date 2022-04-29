import React from 'react'

import Story from './partials/Story'
import { SStories } from './style'

function Index() {
  return (
    <>
      <SStories>
        <Story /> 
        <Story /> 
        <Story /> 
        <Story /> 
        <Story /> 
      </SStories>    
    </>

  )
}

export default Index