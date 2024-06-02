import React from 'react'
import "./css/index.css";
import { images } from '../../assets';
import { personalprojects } from './contents/contents';
import ProjectSliderContainer from '../../components/ProjectSlider/containers/ProjectSliderContainer';
import IntroductionContainer from '../../components/Introduction/containers/IntroductionContainer';
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
            <section className='introduction-section'>
                <IntroductionContainer />
            </section>
        </main>
    )
}

export default Home