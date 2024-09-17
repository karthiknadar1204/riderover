"use client";

import React, { useContext, useEffect, useState } from "react";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
const session_token = "08cffe0d-4c8d-43f1-88dd-9a502ce0b409";
const MAPBOX_RETRIVE_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve/";

const AutocompleteAddress = () => {
  const [source, setSource] = useState<any>();
  const [sourceChange, setSourceChange] = useState<any>(false);
  const [destinationChange, setDestinationChange] = useState<any>(false);
  const [addressList, setAddressList] = useState<any>([]);
  const [destination, setDestination] = useState<any>();

  // const [sourceCordinates,setSourceCordinates]=useState([]);
  // const [destinationCordinates,setDestinationCordinates]=useState([]);

  const { sourceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(
    DestinationCordiContext
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [source, destination]);

  const getAddressList = async () => {
    setAddressList([]);
    const query = sourceChange ? source : destination;
    const res = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setAddressList(result);
  };

  const onSourceAddressClick = async (item: any) => {
    setSource(item.place_formatted);
    setAddressList([]);
    setSourceChange(false);
    const res = await fetch(
      MAPBOX_RETRIVE_URL +
        item.mapbox_id +
        "?session_token=" +
        session_token +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );

    const result = await res.json();
    console.log(result);
    setSourceCordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
    console.log(result);
  };

  const onDestinationAddressClick = async (item: any) => {
    setDestination(item.place_formatted);
    setAddressList([]);
    setDestinationChange(false);
    const res = await fetch(
      MAPBOX_RETRIVE_URL +
        item.mapbox_id +
        "?session_token=" +
        session_token +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );

    const result = await res.json();

    setDestinationCordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
    console.log(result);
  };

  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400 text-[13px]">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
                focus:border-yellow-300 text-[14px]"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChange(true);
          }}
        />
        {addressList?.suggestions && sourceChange ? (
          <div
            className="shadow-md p-1 rounded-md
            absolute w-full bg-white z-20"
          >
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                key={index}
                className="p-3 hover:bg-gray-100
                cursor-pointer"
                onClick={() => {
                  onSourceAddressClick(item);
                }}
              >
                {item.place_formatted}
              </h2>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-3">
        <label className="text-gray-400 text-[13px]">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
            focus:border-yellow-300 text-[14px]"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationChange(true);
          }}
        />
        {addressList?.suggestions && destinationChange ? (
          <div
            className="shadow-md p-1 rounded-md
            absolute w-full bg-white"
          >
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                key={index}
                className="p-3 hover:bg-gray-100
                cursor-pointer"
                onClick={() => {
                  onDestinationAddressClick(item);
                }}
              >
                {item.place_formatted}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AutocompleteAddress;
