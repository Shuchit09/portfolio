import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto  py-20 flex gap-2">
        <Card
          pre={"Featured: Web Development"}
          main={"Projects"}
          width={"basis-1/3"}
          start={false}
          para={true}
          hover={{
            paddingInline: "30px",
            background: "#444",
            boxShadow: "0 0 0.85em #444444",
          }}></Card>
        <Card
          pre={"Get In Touch"}
          main={<div>
            <p>Let's do it,</p><p>together.</p></div>}
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={{
            paddingInline: "30px",
            background: "linear-gradient(to left,#c33cb7, #ff38a1, #f56565)",
            boxShadow: "0 0 0.85em #444",
          }}></Card>
      </div>
    </div>
  );
}

export default Cards