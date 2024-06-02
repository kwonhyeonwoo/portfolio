import React from 'react';
import CustomButton from '../CustomButton';
type Prop = {
    title: string;
    link: string;
}
const CustomButtonContainer = ({ title, link }: Prop) => {
    return (
        <CustomButton title={title} link={link} />
    );
};

export default CustomButtonContainer;