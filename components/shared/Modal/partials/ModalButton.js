import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { SModalButton } from './style'

function ModalButton({ text }) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <SModalButton
      as={motion.button}
      whileTap={{ scale: 0.9 }}
      onClick={() => (modalOpen ? close() : open())}
    >   
      {text}  
    </SModalButton>
  )
}

export default ModalButton