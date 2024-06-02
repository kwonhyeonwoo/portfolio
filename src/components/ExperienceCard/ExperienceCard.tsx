import React from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
type Prop = {
    experience: {
        company: string;
        descirption: string;
        period: string;
        svg: string;
    }
}
const ExperienceCard = ({ experience }: Prop) => {
    const {
        company,
        descirption,
        period,
        svg
    } = experience
    return (
        <div className='experience-card'>
            <div className='title-wrapper'>
                <FontAwesomeIcon icon={faArrowRightLong} />
                <p className='title'>{company}</p>
            </div>
            <div className='period'>{period}</div>
            <div className='description'>
                {descirption}
            </div>
        </div>
    );
};

export default ExperienceCard;