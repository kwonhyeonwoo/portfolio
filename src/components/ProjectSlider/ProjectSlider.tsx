import React, { useState } from 'react';
import "./css/index.css";
import CardContainer from '../Card/containers/CardContainer';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Prop = {
    projects: {
        link: string;
        img: string;
    }[];
    NextSlide: (len: number) => void;
    PrevSlide: () => void;
    currentIndex: number;
    width?: string;
    height?: string;
}
const ProjectSlider = ({
    projects,
    NextSlide,
    PrevSlide,
    currentIndex,
    width,
    height
}: Prop) => {
    return (
        <div className='project-wrapper'>
            <div className="projects-slider" style={{ width, }}>
                <div className="slider-track" style={{
                    width,
                    height,
                    transform: `translateX(-${currentIndex * 100}%)`
                }}>
                    {projects.map((item, idx) => (
                        <CardContainer
                            key={idx}
                            project={item}
                            width={width}
                            height={height}
                        />
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