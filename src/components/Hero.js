import React from 'react';
import quesaBirriaHD from "../assets/img/food-stockimg/quesa-birria-HD.jpg";
// Will act as landing page. Showing logo, About (Mexican & Salvadoran origins), and image of owner.

function Hero() {
  return (
    <div name="hero" className='bg-white w-screen h-screen flex '>
      <div className='grid grid-cols-1 sm:grid-cols-2 w-full'>
          <div className="bg-red-200">pic</div>
          {/* <img className="object-cover max-h-[10]" src={quesaBirriaHD} /> */}
          <div className="bg-amber-200">words</div>
          <div className="bg-cyan-200">words</div>
          <div className="bg-fuchsia-200">pic</div>
      </div>
    </div>
  )
}

export default Hero