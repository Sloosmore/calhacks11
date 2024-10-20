'use client'

import React, { useState } from 'react'

export default function Block() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`w-64 rounded-3xl p-6 transition-all duration-300 ease-in-out ${
        isHovered 
          ? 'bg-gradient-to-br from-blue-300 to-blue-400 shadow-lg' 
          : 'bg-gradient-to-br from-blue-200 to-blue-300'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-1xl font-bold text-white mb-2">{title}</h2>
      <p className="text-xl text-white">{`${startTime}–${endTime}`}</p>
    </div>
  )
}
