import React from 'react'
import { motion } from 'framer-motion'

import { SModalBackdrop } from '../style'

function ModalBackdrop({ children, onClick }) {
  return (
    <SModalBackdrop
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}  
      onClick={onClick}
    >
      {children}
    </SModalBackdrop>
  )
}

export default ModalBackdrop