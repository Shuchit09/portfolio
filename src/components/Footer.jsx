import React from 'react'

function Footer() {
  const data2 = [
    { title: "GitHub", url: "https://github.com/Shuchit09" },
    { title: "LinkedIn", url: "http://linkedin.com/in/shuchit-singh" },
    { title: "X", url: "#" },
    { title: "Mail", url: "mailto:shuchit.official@gmail.com" },
  ];
  return (
    <div className="w-full pb-3 lg:pb-5 xl:pb-8">
      <div className='px-16 sm:px-36 flex items-center gap-10 sm:gap-0 justify-between'>
        <div className="handles flex gap-3 sm:gap-5 mb:gap-9">
            {data2.map((item,i)=><a href={item.url} 
            style={{
                fontFamily:'Roboto'
            }} className='text-sm text-zinc-500 hover:text-zinc-300'>{item.title}</a>)}
        </div>
        <div className="logo">
          <div className="h-fit w-28 text-semibold">
            <h1
              style={{
                textShadow: "0 0 0.09em #4444",
              }}
              className="font-medium text-2xl mb:text-3xl tracking-wider text-zinc-400">
              Shuchit.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer