// external imports 
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react"

// internal imports
import { StyledTheme } from "../style"

function Theme() {
  const [dark,setDark] = useState(false)

  // this function used to handle theme
  function handleTheme(){
    setDark(!dark)
  }

  return (
    <>
      <StyledTheme onClick={() => handleTheme()} >
        <Image src={`/icons/theme/${dark ? 'sun' : 'moon'}.png`} width={7} height={5} layout='responsive' />
      </StyledTheme>    
    </>

  )
}

export default Theme