import React from 'react';
import quesaBirriaHD from "../assets/img/food-stockimg/quesa-birria-HD.jpg";
import pupusasHD from "../assets/img/food-stockimg/pupusasHD.jpg";
// Will act as landing page. Showing logo, About (Mexican & Salvadoran origins), and image of owner.

function Hero() {
  return (
    <div name="hero" className='bg-white w-screen h-screen flex flex-wrap'>
      <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-1/2'>        
        <img className="w-full object-cover min-h-0 h-full" src={quesaBirriaHD} />
        <div className=' bg-red-700'>   <span>Placeholder for short origin story</span>     </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-1/2'>
        <div className='bg-red-500'>  <span>Placeholder for hours</span>   </div>
        <img className="w-full object-cover min-h-0 h-full" src={pupusasHD} />        
      </div>
    </div>
  )
}

export default Hero