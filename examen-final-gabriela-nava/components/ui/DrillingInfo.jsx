import React, { useState } from 'react'

export default function DrillingComponent() {
  const [x, setX] = useState(42) 
  const [result, setResult] = useState(x) 

  const handleIncrement = () => {
    const newValue = x + 1
    setX(newValue)
    setResult(newValue) 
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <DrillingOne x={x} />
      <DrillingTwo result={result} setResult={setResult} x={x} />
      <DrillingThree handleClick={handleIncrement} />
    </div>
  )
}

const DrillingOne = ({ x }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>ComponentA</h2>
      <p>X = {x}</p>
    </div>
  )
}

const DrillingTwo = ({ result, setResult, x }) => {
  const handleClick = () => {
    setResult(result + x)
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>ComponentB</h2>
      <p>X = {result}</p>
      <DrillingThree handleClick={handleClick} />
    </div>
  )
}

const DrillingThree = ({ handleClick }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>ComponentC</h2>
      <button onClick={handleClick} className="bg-blue-500 rounded text-white">X++</button>
    </div>
  )
}
