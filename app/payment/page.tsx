"use client"

import React, { useContext } from 'react'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { loadStripe } from '@stripe/stripe-js';


const Payment = () => {
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);



  return (
    <div>
        page
    </div>
  )
}

export default Payment