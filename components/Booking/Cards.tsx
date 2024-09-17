"use client"

import CardsList from '@/data/CardsList'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Methods</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {CardsList.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer
                            transition-all duration-300 ease-in-out
                            ${activeIndex === index
                                ? "bg-blue-50 border-2 border-blue-400"
                                : "bg-gray-50 hover:bg-gray-100"
                            }
                        `}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="relative w-12 h-12 mb-2">
                            <Image
                                src={item.image}
                                alt={item.name}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards