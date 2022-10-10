import React from 'react';
import GalleryCarousel from './GalleryCarousel';
import { GalleryList } from '../helpers/GalleryList';

console.log(GalleryList.map((picture, index) => {return picture.name}));

function Gallery() {
  return (
    <div name="gallery" className='bg-fuchsia-200  flex'>
      <div className="">Gallery</div> 
      <div className="">
        {GalleryList.map((picture, index) => {
          return <GalleryCarousel id={index} name={picture.name} image={picture.image} alt={picture.alt}/> 
        })}
      </div> 
      

    </div>
  )
}

export default Gallery