"use client"

import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { useEffect, useState } from 'react';
import { UserLocationContext } from '@/context/UserLocationContext';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'

const Home = () => {

  const [userLocation,setUserLocation]=useState();
  const [soruceCordinates,setSourceCordinates]=useState<any>([]);
  const [destinationCordinates,setDestinationCordinates]=useState<any>([]);
  const [directionData,setDirectionData]=useState<any>([]);
  const [carAmount,setCarAmount]=useState<any>([]);

  useEffect(()=>{
    getUserLocation();
  },[])

  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }

  return (
    <div>
      <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCordiContext.Provider value={{soruceCordinates,setSourceCordinates}}>
      <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
      <SelectedCarAmountContext.Provider value={{carAmount,setCarAmount}}>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div >
            <Booking/>
          </div>
          <div className='col-span-2'>
            <MapBoxMap/>
          </div>
        </div>
      </SelectedCarAmountContext.Provider>
        </DirectionDataContext.Provider>
        </DestinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  )
}

export default Home