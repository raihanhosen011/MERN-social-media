import React from 'react'
import Modal from '../index'

function PostModal({ open, setOpen }) {
  return (
    <>
      {open &&
        <Modal handleClose={() => setOpen(false)} >
           <p>Assalamu Alaikum, orahmatullah obrakatuh</p> 
        </Modal>
      }    
    </> 
  )
}

export default PostModal