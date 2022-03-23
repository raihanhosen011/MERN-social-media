import React from 'react'
import { useSelector } from 'react-redux'

import Loading from './partials/Loading'
import Alert from './partials/Alert'

import { GlobalActions } from './style'

function Index() {
  const { global } = useSelector(state => state) 
  
  return (
    <GlobalActions>

       {global.LOADING && <Loading />}
       <Alert open={true} text='Your promocode has been applied' size='sm' type='success' /> 

    </GlobalActions>
  )
}

export default Index