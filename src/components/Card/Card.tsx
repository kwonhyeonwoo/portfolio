import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
type Prop = {
    project: {
        link: string;
        img: string;
    }
}
const Card = ({ project }: Prop) => {
    const { img, link } = project;
    return (
        <Link to={link} className='card-wrapper'>
            <div className='card'>
                <img className='img' src={img} alt="content-img" />

            </div>
        </Link>
    );
};

export default Card;