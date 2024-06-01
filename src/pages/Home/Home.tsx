import React, { useState } from 'react'
import "./css/index.css";
import { images } from '../../assets';
import CardContainer from '../../components/Card/containers/CardContainer';
import { companyprojects, personalprojects } from './contents/contents';
import ProjectSliderContainer from '../../components/ProjectSlider/containers/ProjectSliderContainer';
type Prop = {
    NextSlide: (length: number) => void;
    PrevSlide: () => void;
    currentIndex: number;
}
function Home({ NextSlide, PrevSlide, currentIndex }: Prop) {

    return (
        <main className='home-page'>
            <section className='home-section'>
                <div className='home-wrapper'>
                    <div className='img-wrapper'>
                        <img className='img' src={images.main.main} alt="main img" />
                        <div className='introduce-wrapper'>
                            <div className='introuduce-title'>frontend developer</div>
                            <div className='introduce-subtitle'>
                                끊임없이 배우고 성장하는 프론트엔드 개발자입니다.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='projects-section'>
                <ProjectSliderContainer title='개인 프로젝트' projects={personalprojects} />
                <ProjectSliderContainer title='회사 프로젝트' projects={personalprojects} />
                <ProjectSliderContainer title='회사 프로젝트' projects={personalprojects} />
            </section>
        </main>
    )
}

export default Home