import { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

import Avatar from '@components/shared/Avatar'
import PostModal from '../CreatePost/partials/PostModal'

import { SCreate, SHeader, SSearchBar } from './style'
import StyledContainer from '@components/shared/Container/style'

function Index() {
  const [open, setOpen] = useState(false) 

  return (
    <SHeader>
       <StyledContainer>
          <h2 className='navbar-brand' > devbook </h2>

          <SSearchBar>
             <UilSearch />
             <input type='search' placeholder='Search for creators, inspirations, and projects' />
          </SSearchBar>

          <SCreate>
             <label className='btn btn-primary' for='create-post' onClick={() => setOpen(true)} >Create</label>
             <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />
          </SCreate>

          <PostModal open={open} setOpen={setOpen} />
       </StyledContainer> 
    </SHeader>
  )
}

export default Index