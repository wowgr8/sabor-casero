import React from 'react';
import GalleryCarousel from './GalleryCarousel';
import { GalleryList } from '../helpers/GalleryList';

console.log(GalleryList.map((picture, index) => {return picture.name}));

function Gallery() {
  return (
    <div name="gallery" className='bg-fuchsia-200 relative w-screen h-screen'>
      <GalleryCarousel />
    </div>
  )
}

export default Gallery