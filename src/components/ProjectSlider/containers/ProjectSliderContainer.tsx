import React, { useState } from 'react';
import ProjectSlider from '../ProjectSlider';
type Prop = {
    width?: string;
    height?: string;
    projects: {
        link: string;
        img: string;
    }[];

}
const ProjectSliderContainer = ({
    projects,
    width,
    height
}: Prop) => {
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
        <ProjectSlider
            width={width}
            height={height}
            projects={projects}
            currentIndex={currentIndex}
            NextSlide={NextSlide}
            PrevSlide={PrevSlide} />
    );
};

export default ProjectSliderContainer;