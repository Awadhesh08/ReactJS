import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1 className='bg-green-600 p-4'>Hello i am Awadhesh</h1> */}
      <Header />
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
