import React from 'react';
import ExperienceCard from '../ExperienceCard';
type Prop = {
    experience: {
        company: string;
        descirption: string;
        period: string;
        svg: string;
    }
}
const ExperienceCardContainer = ({ experience }: Prop) => {
    return (
        <ExperienceCard experience={experience} />
    );
};

export default ExperienceCardContainer;