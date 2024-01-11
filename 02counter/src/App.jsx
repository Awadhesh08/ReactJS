import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)

  const addedValue = () => {
    // Counter = Counter + 1;
    // setCounter(Counter)
    setCounter(Counter + 1)
    // console.log("Clicked", Counter)
  }

  const removedValue = () => {
    setCounter(Counter - 1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter Value:{Counter}</h2>
      <button
        onClick={addedValue}
      >Add Value {Counter}</button>
      <button
        onClick={removedValue}>Remove Value {Counter}</button>
      <p>Footer:{Counter}</p>
    </>
  )
}

export default App
