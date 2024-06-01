import React, { useState } from 'react';
import ProjectSlider from '../ProjectSlider';
type Prop = {
    projects: {
        title: string;
        description: string;
        link: string;
        img: string;
    }[];
    title: string;

}
const ProjectSliderContainer = ({
    projects,
    title,
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
        <ProjectSlider projects={projects} title={title} currentIndex={currentIndex} NextSlide={NextSlide} PrevSlide={PrevSlide} />
    );
};

export default ProjectSliderContainer;