import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect,useState } from 'react'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {
  return (
    <nav>Nav</nav>
  )
}

export default Nav