import React from 'react';
import quesaBirriaHD from "../assets/img/food-stockimg/quesa-birria-HD.jpg";
import pupusasHD from "../assets/img/food-stockimg/pupusasHD.jpg";
// Will act as landing page. Showing logo, About (Mexican & Salvadoran origins), and image of owner.

function Hero() {
  return (
    <div name="hero" className='bg-white w-screen h-screen flex flex-wrap'>
      {/* Next you can try all divs inside one grid div with grid-cols-2 and each div can have a grid-row-? */}
      <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-1/2'>        
        <div className='  bg-red-800'>  <img className="object-cover" src={quesaBirriaHD} />      </div>
        <div className=' bg-red-700'>   <span>Placeholder for short origin story</span>     </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-1/2'>
        <div className='bg-red-500'>  <span>Placeholder for hours</span>   </div>
        <img className="object-none object-left " src={pupusasHD} />        
        {/* object-anythingOtherThanNone does not work....., object-left only works with object-none atm.... */}
      </div>
    </div>
  )
}

export default Hero

// <div className="bg-red-200">pic1</div>
// {/* <img className="object-cover w-full h-1/2 " src={quesaBirriaHD} /> */}
// <div className="bg-red-400 ">words 1</div>
// <div className="bg-orange-200 ">words 2</div>
// {/* <div className="bg-fuchsia-200">pic2</div> */}
// 