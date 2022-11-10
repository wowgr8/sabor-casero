import React, {useState} from 'react'
import { GalleryList } from '../helpers/GalleryList';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

let count = 0;

function GalleryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(GalleryList.map((picture, index) => {return picture.name}))



    return (
    <div className="w-full select-none relative">

    </div>

    )
}

export default GalleryCarousel