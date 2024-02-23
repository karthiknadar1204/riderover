import Booking from '@/components/Booking/Booking'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div >
          <Booking/>

        </div>

        <div className='col-span-2 bg-red-100 '>
          Map

        </div>

      </div>
    </div>
  )
}

export default Home