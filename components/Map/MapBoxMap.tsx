"use client"
import React, { useContext, useEffect, useRef, useState } from "react";
import { Map, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


const MapBoxMap = () => {
  return (
    <div className="p-5">
        <h2 className="text-[20px] font-semibold">Map</h2>
        <div className="rounded-lg overflow-hidden">
            <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{ width: "100%", height: 650, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            />
        </div>
    </div>
  )
}

export default MapBoxMap