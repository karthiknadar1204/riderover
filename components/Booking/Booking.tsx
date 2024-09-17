"use client";

import React, { useContext } from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";
import Cards from "./Cards";
import { useRouter } from "next/navigation";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";

const Booking = () => {
  const { carAmount } = useContext(SelectedCarAmountContext);
  const router = useRouter();

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan Your Ride</h2>
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <AutocompleteAddress />
        <Cars />
        <Cards />
        <button
          className={`w-full text-lg font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out ${
            carAmount
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!carAmount}
          onClick={() => router.push("/payment")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
