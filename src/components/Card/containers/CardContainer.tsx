import React from 'react';
import Card from '../Card';
type Prop = {
    width?: string;
    height?: string;
    project: {
        link: string;
        img: string;
    }
}
const CardContainer = ({ project, width, height }: Prop) => {
    return (
        <Card project={project} width={width} height={height} />
    );
};

export default CardContainer;