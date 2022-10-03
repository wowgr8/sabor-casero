import React from 'react';
import quesaBirriaHD from "../assets/img/food-stockimg/quesa-birria-HD.jpg";
import pupusasHD from "../assets/img/food-stockimg/pupusasHD.jpg";
// Will act as landing page. Showing logo, About (Mexican & Salvadoran origins), and image of owner.

function Hero() {
  return (
    <div name="hero" className='bg-white w-screen h-screen flex'>
      <div className='grid grid-cols-1 sm:grid-cols-2 w-full'>
          <div className="bg-red-200 h-full">pic1</div>
          {/* <img className="object-cover h-full" src={quesaBirriaHD} /> */}
          <div className="bg-white h-full">words 1</div>
          <div className="bg-white h-full">words 2</div>
          {/* <div className="bg-fuchsia-200">pic2</div> */}
          <img className="object-cover h-full" src={pupusasHD} />
      </div>
    </div>
  )
}

export default Hero