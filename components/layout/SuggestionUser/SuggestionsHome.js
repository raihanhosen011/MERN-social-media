import React from 'react'
import { UilRedo } from '@iconscout/react-unicons'

import User from './partials/User'
import { SSuggestionHead, SSuggestionHome, SUserLists } from './style'

function SuggestionsHome() {
  return (
    <>
      <SSuggestionHome>
        <SSuggestionHead>
           <small>suggestion for you</small>
           <UilRedo />
        </SSuggestionHead>

        <SUserLists>
          <User />
          <User />
          <User />
          <User />
          <User />          
        </SUserLists>
      </SSuggestionHome>    
    </>
  )
}

export default SuggestionsHome