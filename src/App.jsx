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
    
      {/* <div className="w-full h-[1px] bg-zinc-700"></div> */}
      <main className="top-0"></main>
      
    </div>
  );
}

export default App