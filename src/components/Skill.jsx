import React from 'react'

function Skill({data}) {
  return (
    <div className='w-full py-16'>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className='text-5xl capitalize font-medium'>{data.title}</h1>
        <div className="dets w-1/3">
          <p className='mb-10'>{data.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill