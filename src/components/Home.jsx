import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function Home() {
  return (
    <div>
      <div className="static">
        <header className="absolute top-0 z-10 w-full">
          <Navbar className="sticky top-0 z-10 w-full"></Navbar>
        </header>
        <Hero imgURL="../public/images/my_picture.jpg"></Hero>
      </div>
    </div>
  );
}

export default Home