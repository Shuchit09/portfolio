import React from 'react'

function Footer() {
  return (
    <div className="w-full py-3">
      <div className='px-36 flex items-center justify-between'>
        <div className="handles flex gap-9">
            {["LinkedIn","GitHub","X","Mail"].map((item,i)=><a href="#"
            style={{
                fontFamily:'Roboto'
            }} className='text-sm text-zinc-500 hover:text-zinc-300'>{item}</a>)}
        </div>
        <div className="logo">
          <div className="h-fit w-28 text-semibold">
            <h1
              style={{
                textShadow: "0 0 0.09em #4444",
              }}
              className="font-medium text-3xl tracking-wider text-zinc-400">
              Shuchit.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer