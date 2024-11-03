import { SignedIn } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <SignedIn>
        {children}
        </SignedIn>
    </div>
  )
}

export default layout