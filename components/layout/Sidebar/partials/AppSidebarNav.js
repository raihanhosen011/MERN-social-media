import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { SSidebarNavItem, SSidebarNavLists } from '../style'

function AppSidebarNav({ items }) {
  const router = useRouter()
  const [path, setPath] = useState('/')

  useEffect(() => {
    setPath(router.pathname)
  }, [router.pathname])

  return (
    <SSidebarNavLists>
      {items.map(({ name, to, icon }, idx) => 
        <Link key={idx} href={to} >
          <SSidebarNavItem className={to === path && 'active-nav'} >
            {icon}
            <span>{name}</span>
          </SSidebarNavItem>  
        </Link>
      )}
    </SSidebarNavLists>
  )
}

export default AppSidebarNav