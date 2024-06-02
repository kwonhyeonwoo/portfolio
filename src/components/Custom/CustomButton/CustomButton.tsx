import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
type Prop = {
    title: string;
    link: string;
}
const CustomButton = ({ title, link }: Prop) => {
    return (
        <div className='custom-button'>
            <Link to={link}>
                <button className='button'>
                    <button><p>{title}</p> <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </button>
            </Link>
        </div>
    );
};

export default CustomButton;