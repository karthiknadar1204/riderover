"use client"
import React, { useContext, useEffect, useRef, useState } from "react";
import { Map, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { UserLocationContext } from "@/context/UserLocationContext";
import Markers from "./Markers";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
// import pin from '../../public/pin.png'


const MapBoxMap = () => {

  const mapRef = useRef<any>();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { sourceCordinates, setSourceCordinates } =
  useContext(SourceCordiContext);
const { destinationCordinates, setDestinationCordinates } = useContext(
  DestinationCordiContext
);

  useEffect(() => {
    if (sourceCordinates) {
      mapRef.current?.flyTo({
        center: [soruceCordinates.lng, soruceCordinates.lat],
        duration: 2500,
      });
    }
  }, [sourceCordinates]);


  useEffect(() => {
    if (destinationCordinates) {
      mapRef.current?.flyTo({
        center: [destinationCordinates.lng, destinationCordinates.lat],
        duration: 2500,
      });
    }

    if (sourceCordinates && destinationCordinates) {
      getDirectionRoute();
    }
  }, [destinationCordinates]);


  return (
    <div className="p-5">
        <h2 className="text-[20px] font-semibold">Map</h2>
        <div className="rounded-lg overflow-hidden">
        {userLocation ? (
          <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.lng,
              latitude: userLocation?.lat,
              zoom: 14,
            }}
            style={{ width: "100%", height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
          {/* <Marker longitude={userLocation?.lng} latitude={userLocation?.lat} anchor="bottom" className='w-10 h-10'>
            <img src="./pin.png"/>
          </Marker> */}
          <Markers/>

          </Map>
        ) : null}
        </div>
    </div>
  )
}

export default MapBoxMap