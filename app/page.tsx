'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  const { user } = useUser()
  const userRole = user?.publicMetadata?.role
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {userRole === 'ADMIN' ? <AdminPage /> : <NotAuthorizedPage />}
      </SignedIn>
    </div>
  )
}

export default HomePage

const NotAuthorizedPage = () => {
  return (
    <div>
      <h1>Not Authorized</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  )
}

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <UserButton />
    </div>
  )
}
