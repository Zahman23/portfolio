'use client'

import React from 'react'

interface CircleProps {
  size: number
  color: string
}

const Circle = ({ size, color}: CircleProps) => {
  return (
    <div className={`w-${size} h-${size} rounded-full ${color} bg-green-900 `}></div>
  )
}

export default Circle