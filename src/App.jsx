import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='h-screen w-full bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <div className="w-full h-[1px] bg-zinc-700"></div>
      <Hero></Hero>

    </div>
  )
}

export default App