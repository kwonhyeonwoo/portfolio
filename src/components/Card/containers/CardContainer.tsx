import React from 'react';
import Card from '../Card';
type Prop = {
    project: {

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