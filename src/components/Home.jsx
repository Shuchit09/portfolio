import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function Home() {
  return (
    <div>
      <div className="static">
        <header className="absolute top-0 z-10 w-full">
          <Navbar
            style={{
              backgroundImage:
                " linear-gradient(to top, #000 40%, #000 30%, #000 10%, transparent)",
            }}
            className="sticky top-0 z-10 w-full"></Navbar>
        </header>
        <Hero
          imgURL="../public/images/my_picture.jpg"
          vid="../public/videos/rocket.mp4"></Hero>
      </div>
    </div>
  );
}

export default Home