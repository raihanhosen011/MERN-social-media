import React from 'react'
import { motion } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons'

import { SModal } from './style'
import Backdrop from './partials/ModalBackdrop'

const Index = ({ handleClose, children }) => {
  
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
        <SModal
          as={motion.div}
          onClick={(e) => e.stopPropagation()}  
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
           {children}
           <UilTimes onClick={handleClose} />
        </SModal>
    </Backdrop>
  );
};

export default Index