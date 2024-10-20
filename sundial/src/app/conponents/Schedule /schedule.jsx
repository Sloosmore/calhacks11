'use client'

import React from 'react'
import Block from './Block'

export default function Schedule() {
  const blocksData = [
    { title: 'Interactive Marketing', startTime: '11:00', endTime: '12:50' }

  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {blocksData.map((block, index) => {
        return (
          <Block 
            key={index}
            title={block.title}
            startTime={block.startTime}
            endTime={block.endTime}
          />
        )
      })}
    </div>
  )
}
