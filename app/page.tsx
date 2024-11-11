"use client";

import { SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import React, { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";

interface UserLocation {
  lat: number;
  lng: number;
}

const Home = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [userLocation, setUserLocation] = useState<UserLocation | undefined>();
  const [soruceCordinates, setSourceCordinates] = useState<any>([]);
  const [destinationCordinates, setDestinationCordinates] = useState<any>([]);
  const [directionData, setDirectionData] = useState<any>([]);
  const [carAmount, setCarAmount] = useState<any>([]);

  useEffect(() => {
    if (isSignedIn) {
      getUserLocation();
    }
  }, [isSignedIn]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to RideRover</h1>
          <p className="text-gray-600 mb-6">
            Please sign in to start planning your ride
          </p>
          <SignInButton mode="modal">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Sign In to Continue
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordiContext.Provider value={{ soruceCordinates, setSourceCordinates }}>
          <DestinationCordiContext.Provider value={{ destinationCordinates, setDestinationCordinates }}>
            <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
              <SelectedCarAmountContext.Provider value={{ carAmount, setCarAmount }}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div>
                    <Booking />
                  </div>
                  <div className="col-span-2">
                    <MapBoxMap />
                  </div>
                </div>
              </SelectedCarAmountContext.Provider>
            </DirectionDataContext.Provider>
          </DestinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
};

export default Home;
