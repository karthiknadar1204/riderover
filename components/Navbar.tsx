"use client"
import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

function NavBar() {
  const { isSignedIn, user, isLoaded } = useUser();
  return isSignedIn && (
    <nav className='flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200 shadow-md'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold text-blue-600 tracking-wide'>RideRover</h1>
      </div>
      <UserButton 
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: 'h-10 w-10'
          }
        }}
      />
    </nav>
  )
}

export default NavBar