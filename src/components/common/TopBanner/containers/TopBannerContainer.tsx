import React from 'react';
import TopBanner from '../TopBanner';
type Props = {
    src: string;
    title: string;
    subtitle: string;
}
const TopBannerContainer = ({
    src,
    title,
    subtitle
}: Props) => {
    return (
        <TopBanner src={src} title={title} subtitle={subtitle} />
    );
};

export default TopBannerContainer;