import React from 'react'

import _nav from './partials/_nav'
import { SProfile, SSidebar, SSidebarNav } from './style'
import AppSidebarNav from './partials/AppSidebarNav'

import Avatar from '@components/shared/Avatar'

function Index() {
  return (
    <SSidebar>
       <SSidebarNav>
          <SProfile>
             <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />
             
             <div>
               <h4>Raihan Hosen</h4>
               <p>@raihan</p>   
             </div>
          </SProfile> 
           
          <AppSidebarNav items={_nav} />
       </SSidebarNav>
    </SSidebar>
  )
}

export default Index