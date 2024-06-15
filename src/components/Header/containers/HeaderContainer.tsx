import React from 'react';
import Header from '../Header';
import { useLocation, useParams } from 'react-router-dom';
type Prop = {

}
const HeaderContainer = (props: Prop) => {
    const params = useLocation();
    return (
        <Header url={params.pathname} />
    );
};

export default HeaderContainer;