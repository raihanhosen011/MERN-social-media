import React from 'react'
import AlertWrapper from './partials/AlertWrapper'

function Index({ setOpen, open, text, size, type, href }) {
    return (
      <>
        <AlertWrapper open={open} setOpen={setOpen} size={size} type={type} href={href} >
           {open && text}
        </AlertWrapper>
      </>
    )
}

export default Index