import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loading from './partials/Loading'
import Alert from './partials/Alert'

import { GlobalActions } from './style'

function Index() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({ })

  const { global } = useSelector(state => state)

  useEffect(() => {
    const { ERR_ALERT, SUC_ALERT } = global
    
    if(ERR_ALERT.open) setData(ERR_ALERT) 
    if(SUC_ALERT.open) setData(SUC_ALERT)

    if(data.open) setOpen(true)
  }, [global])

  
  if(data?.type === 'success'){
    setTimeout(() => {
      setOpen(false)
      setData({ })
    }, 8000)
  }

  return (
    <GlobalActions>

       {global.LOADING && <Loading />}

       <Alert open={open} setOpen={setOpen} text={data?.msg} size={data?.size} type={data?.type} />
       
    </GlobalActions>
  )
}

export default Index