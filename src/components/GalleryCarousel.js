import React, {useState} from 'react'
import { GalleryList } from '../helpers/GalleryList';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

let count = 0;

function GalleryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(GalleryList.map((picture, index) => {return picture.name}))

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
    <div className="w-full select-none relative">

    </div>

    )
}

export default GalleryCarousel