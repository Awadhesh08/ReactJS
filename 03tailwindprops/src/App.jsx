import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let Myobj = {
    name: "Awadhesh",
    age: 24
  }

  let Arr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>

      {/* <Card channel="Chai or Code" someObj={Myobj}/> */}
      <Card username="Awadhesh..N" btnText="Click Me" />
      <Card username="Awadhesh" btnText="Visit Me"/>
    </>
  )
}

export default App
