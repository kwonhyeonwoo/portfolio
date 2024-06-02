import React from 'react'
import "./css/index.css";
import { images } from '../../assets';
import { personalprojects } from './contents/contents';
import ProjectSliderContainer from '../../components/ProjectSlider/containers/ProjectSliderContainer';
import IntroductionContainer from '../../components/Introduction/containers/IntroductionContainer';
import CustomButton from '../../components/Custom/CustomButton/CustomButton';
import CustomButtonContainer from '../../components/Custom/CustomButton/containers/CustomButtonContainer';
type Prop = {
    NextSlide: (length: number) => void;
    PrevSlide: () => void;
    currentIndex: number;
}
function Home({ NextSlide, PrevSlide, currentIndex }: Prop) {
    return (
        <main className='home-page'>
            {/* 홈 이미지 */}
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
            {/* 간단한 내 소개 */}
            <section className='introduction-section'>
                <IntroductionContainer />
            </section>
            {/* 경력 */}
            <section className='experience-section'>
                <div className='experience-wrapper'>

                </div>
            </section>
            {/* 프로젝트 모음 */}
            <section className='projects-section'>
                <div className='title-wrapper'>
                    <h2 className='title'>끊임없는 나의 "도전"</h2>
                    <div className='subtitle'>
                        <p className='subtitle-bold'>끊임없는 열정과 새로운 기술에 대한 도전의식을 가지고 있습니다.</p>
                        <p className='subtitle-text'>{`전문적인 웹 및 애플리케이션 개발뿐만 아니라 혁신적인 디지털
솔루션을 통해 다양한 분야로 확장하고 있으며, 고객의 성공을 위한 토탈 개발 서비스를 
지향해 성장하고 있습니다.`}</p>
                        <div className='button-wrapper'>
                            <CustomButtonContainer title='Project' link='' />
                        </div>
                        <div className='line' />
                    </div>
                </div>
                <div className='projects-wrapper'>
                    <ProjectSliderContainer title='개인 프로젝트' projects={personalprojects} />
                    <ProjectSliderContainer title='회사 프로젝트' projects={personalprojects} />
                    <ProjectSliderContainer title='회사 프로젝트' projects={personalprojects} />
                </div>
            </section>
        </main>
    )
}

export default Home