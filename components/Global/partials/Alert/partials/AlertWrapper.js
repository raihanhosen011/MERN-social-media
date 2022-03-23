import React from 'react'
import { Link } from 'next/router'

import { UilExternalLinkAlt, UilMultiply } from '@iconscout/react-unicons'

function AlertWrapper({ type, children, href, size, open, setOpen }) {

  let alertMaterial = {
    success : {title: "Success", icon: "success"},
    warning : {title: "Warning", icon: "warning"},
    info : {title: "Information", icon: "info"},
  }

  let dMaterial = Object.keys(alertMaterial).includes(type) && alertMaterial[type]

  return (
    <div className={`alert-wrapper ${type} ${open && 'open'}`} >

        <div className='alert-header' >
           <div className='alert-header-left' >
              <h3 className='alert-title' > 
                <img className='alert-icon' src={`/icons/${dMaterial.icon}.png`} alt='alert icon' />
                {dMaterial.title} 
              </h3>
              
              {size === 'sm' && <p className='alert-desc' > : {children} </p>}
           </div>

           <div className='alert-header-right' >
              {
                href && size === 'sm' ? 
                <Link to={href} className='external-link' >
                   SEE MORE 
                   <UilExternalLinkAlt /> 
                </Link> : null
              }
             
              <span className='alert-close-icon' onClick={() => setOpen(false)} >
                 <UilMultiply />
              </span>
           </div> 
        </div>

        {
          size === 'lg' || !size ?
          <div className='alert-body' >
              <p className='alert-desc' > {children} </p>

              {
                href && size === 'lg' ? 
                <Link to={href} className='external-link' >
                   SEE MORE <UilExternalLinkAlt /> 
                </Link> : null
              }
          </div> : null
        }    

    </div>
  )
}

export default AlertWrapper