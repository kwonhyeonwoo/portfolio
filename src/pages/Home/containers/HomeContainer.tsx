import React, { useState } from 'react'
import Home from '../Home'
type Props = {

}
function HomeContainer() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const NextSlide = (length: number) => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < length - 1) {
                return prevIndex + 1;
            } else {
                return prevIndex;
            }
        });
    };

    const PrevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            } else {
                return prevIndex;
            }
        });
    };

    return (
        <Home NextSlide={NextSlide} PrevSlide={PrevSlide} currentIndex={currentIndex} />
    )
}

export default HomeContainer