import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function Home() {
  return (
    <div>
      <div className="">
        <header className="fixed z-50 w-full">
          <Navbar
            style={{
              background:
                " linear-gradient(to top, #000 40%, #000 30%, #000 10%, transparent)",
            }} className=''></Navbar>
        </header>
        <Hero
          imgURL="../public/images/my_picture.jpg"
          vid="../public/videos/rocket.mp4"></Hero>
      </div>
    </div>
  );
}

export default Home