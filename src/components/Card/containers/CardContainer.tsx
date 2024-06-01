import React from 'react';
import Card from '../Card';
type Prop = {
    project: {
        title: string;
        description: string;
        link: string;
        img: string;
    }
}
const CardContainer = ({ project }: Prop) => {
    return (
        <Card project={project} />
    );
};

export default CardContainer;