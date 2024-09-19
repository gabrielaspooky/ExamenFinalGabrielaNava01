"use client"

import { useState, useEffect } from 'react'

export default function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = () => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Digital Clock</h1>
        <div className="text-6xl font-mono text-center text-green-600">
          {formatTime(time)}
        </div>
      </div>
    </div>
  )
}