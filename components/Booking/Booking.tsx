import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'

const Booking = () => {
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight * 0.72 : 0;
  return (
    <div className='p-5' >
        <h2 className='text-[20px] font-semibold ' >Booking</h2>
        <div className='border-[1px] p-5 
        rounded-md'   >
            <AutocompleteAddress/>
        </div>
    </div>
  )
}

export default Booking