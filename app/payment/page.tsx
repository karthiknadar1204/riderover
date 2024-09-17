"use client"

import React from 'react'
import Link from 'next/link'

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Gateway Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          We're working hard to integrate a secure payment system. In the meantime, feel free to explore our website and plan your next ride!
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
          <p className="font-bold">Note:</p>
          <p>This is a demo version. No actual payments will be processed.</p>
        </div>
        <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default Payment