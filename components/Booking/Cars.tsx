"use client";

import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";
import CarsList from "@/data/CarsList";
import Image from "next/image";
import React, { useContext, useState } from "react";

function Cars() {
  const [selectedCar, setSelectedCar] = useState<any>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);

  const getCost = (charges: any) => {
    return (
      charges *
      directionData.routes[0].distance *
      0.000621371192
    ).toFixed(2);
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Choose Your Ride</h2>
      <div className="space-y-4">
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-center p-4 rounded-lg transition-all duration-300 ease-in-out cursor-pointer
              ${index === selectedCar
                ? "bg-blue-50 border-2 border-blue-400"
                : "bg-gray-50 hover:bg-gray-100"
              }
            `}
            onClick={() => {
              setSelectedCar(index);
              setCarAmount(getCost(item.charges));
            }}
          >
            <div className="flex-shrink-0 w-24 h-24 mr-4 relative">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">Comfortable and efficient</p>
            </div>
            <div className="flex-shrink-0 text-right">
              {directionData.routes && (
                <span className="text-xl font-bold text-blue-600">
                  ${getCost(item.charges)}
                </span>
              )}
              <p className="text-sm text-gray-600">estimated fare</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
