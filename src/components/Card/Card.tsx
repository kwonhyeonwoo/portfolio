import React from 'react';
import "./css/index.css";
type Prop = {
    project: {
        title: string;
        description: string;
        link: string;
        img: string;
    }
}
const Card = ({ project }: Prop) => {
    const { title, img, description, link } = project;
    return (
        <div className='card'>
            <img className='img' src={img} alt="content-img" />
            <div className='info-wrapper'>
                <div className='info-title'>{title}</div>
                <div className='info-description'>{description}</div>
            </div>
        </div>
    );
};

export default Card;