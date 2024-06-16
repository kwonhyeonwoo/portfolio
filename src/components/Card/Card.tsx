import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
type Prop = {
    width?: string;
    height?: string;
    project: {
        link: string;
        img: string;
    }
}
const Card = ({ project: { img, link }, width }: Prop) => {
    return (
        <Link to={link} className='card-wrapper'>
            <div className='card' style={{ width }}>
                <img
                    className={`img`}
                    src={img}
                    alt="content-img"
                />
            </div>
        </Link>
    );
};

export default Card;