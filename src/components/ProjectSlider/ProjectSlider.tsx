import React, { useState } from 'react';
import "./css/index.css";
import CardContainer from '../Card/containers/CardContainer';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Prop = {
    projects: {
        title: string;
        description: string;
        link: string;
        img: string;
    }[];
    title: string;
    NextSlide: (len: number) => void;
    PrevSlide: () => void;
    currentIndex: number;
}
const ProjectSlider = ({
    projects,
    title,
    NextSlide,
    PrevSlide,
    currentIndex
}: Prop) => {
    return (
        <div className='project-wrapper'>
            <div className="projects-slider">
                <h2 className='project-title'>{title}</h2>
                <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((item, idx) => (
                        <CardContainer key={idx} project={item} />
                    ))}
                </div>
                <div className='button-wrapper'>
                    <button className='slider-button' onClick={PrevSlide}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button className='slider-button' onClick={() => NextSlide(projects.length)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default ProjectSlider;