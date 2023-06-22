import React, { useState } from 'react';
import { GalleryList } from '../helpers/GalleryList';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

let count = 0;

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
      count = (count + 1) % GalleryList.length;
      setCurrentIndex(count);
  }

  const handleOnPrevClick = () => {
      const productsLength = GalleryList.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
  };

  return (
    <div name="gallery"  className="bg-fuchsia-200 relative w-screen h-screen">
      <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
        <div className="carousel-container border border-red-900 rounded-lg">
          <img
            src={GalleryList[currentIndex].image}
            alt={GalleryList[currentIndex].alt}
            className="absolute w-full h-full rounded-lg object-cover"
          />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={30} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={30} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery