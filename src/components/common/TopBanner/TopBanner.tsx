import React from 'react';
import "./css/index.css";
type Props = {
    src: string;
    title: string;
    subtitle: string;
}
const TopBanner = ({
    src,
    title,
    subtitle,
}: Props) => {
    return (
        <section className='topbanner-section'>
            <div className='topbanner-wrapper'>
                <div className='img-wrapper'>
                    <img className='img' src={src} alt="main img" />
                    <div className='introduce-wrapper'>
                        <div className='introuduce-title'>{title}</div>
                        <div className='introduce-subtitle'>
                            {subtitle}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;