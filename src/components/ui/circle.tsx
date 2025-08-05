'use client'

import React from 'react'

interface CircleProps {
  size: number
  color: string
}

const Circle = ({ size, color}: CircleProps) => {
  return (
    <div className={`w-${size} h-${size} rounded-full bg-${color}-500`}></div>
  )
}

export default Circle