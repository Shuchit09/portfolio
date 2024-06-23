import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="h-screen w-full bg-zinc-900 text-white">
      <header className="absolute top-0 z-10 w-full">
        <Navbar className="sticky top-0 z-10 w-full"></Navbar>
      </header>
      <Hero imgURL="../public/images/my_picture.jpg"></Hero>
      
      
    </div>
  );
}

export default App