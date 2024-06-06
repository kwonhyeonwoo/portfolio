import React from 'react'
import "./css/index.css";
import { images } from '../../assets';
import { personalprojects } from './contents/contents';
import ProjectSliderContainer from '../../components/ProjectSlider/containers/ProjectSliderContainer';
import IntroductionContainer from '../../components/Introduction/containers/IntroductionContainer';
import CustomButtonContainer from '../../components/Custom/CustomButton/containers/CustomButtonContainer';
import ExperienceCardContainer from '../../components/ExperienceCard/containers/ExperienceCardContainer';
import TopBannerContainer from '../../components/TopBanner/containers/TopBannerContainer';
type Prop = {
    NextSlide: (length: number) => void;
    PrevSlide: () => void;
    currentIndex: number;
}
function Home({ NextSlide, PrevSlide, currentIndex }: Prop) {
    return (
        <main className='home-page'>
            {/* 홈 이미지 */}
            {/* <TopBannerContainer
                src={images.main.main}
                title='frontend developer'
                subtitle='끊임없이 배우고 성장하는 프론트엔드 개발자입니다.'
            /> */}
            <section className='home-about-wrapper'>
                <div className='about-wrapper'>
                    <div className='about-text-wrapper'>
                        <p className='text-title'>
                            끊임없이 배우고 성장하는 프론트엔드<br />
                            개발자 입니다.
                        </p>
                        <p className='text-subtitle'>
                            소통이 원활하고 꾸준한 노력을 지속하는 개발자로서,<br />
                            팀과의 협업과 프로젝트 성공을 위해 헌신합니다. <br />
                            항상 최선을 다해 성장하며, 문제 해결에 있어 창의적이고 신속하게 대응합니다.
                        </p>

                    </div>
                    <div className='profile-img'>
                        <img src={images.about.profile} alt="profile" />
                        <div className='profile-about'>
                            <p className='text'>
                                밝고 친화적인 성격으로 팀원들과 원활하게 소통하며,<br />긍정적인 분위기를 조성합니다. <br />
                                항상 미소와 함께 협력하여 최고의 결과를 만들어냅니다.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className='projects-slider-section'>
                <img src={images.main.main} alt="" />
            </section>
            <section className='experience-section'>
                <h2 className='title'>Experience</h2>
                <div className='experience-wrapper'>
                    {experienceArr.map((item, idx) => (
                        <ExperienceCardContainer
                            experience={item}
                            key={idx}
                        />
                    ))}
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

export default Home;

const experienceArr = [
    {
        company: '(주)에프이씨',
        descirption: ` 저는 전기차 충전 시스템을 개발하는 리액트 개발자로 근무했습니다. 
사용자들이 모바일 웹을 통해 충전 신청을 하고, 실시간 데이터를 서버에서 받아 충전량을 
확인할 수 있는 시스템을 개발했습니다. 또한, 키오스크를 통해 사용자가 충전 자리를 선택하고 
충전을 시작할 수 있는 인터페이스를 구축하여 사용자 편의성을 크게 향상시켰습니다. 이 시스템은 
사용자 경험을 개선하고, 전기차 충전 프로세스를 보다 효율적으로 관리할 수 있도록 도와주었습니다.`,
        period: '2022년06월~2023년11월',
        svg: '',
    },
    {
        company: '스테디 디자인',
        descirption: `현재 저는 SI 회사에서 다양한 프로젝트를 진행하며 여러 기술을 접하고 있습니다. 
특히 디자인 회사의 특성상 UI/UX에 많은 신경을 써서 개발하고 있습니다. 다양한 기술 스택을 활용하여 
사용자 친화적인 인터페이스를 구현하고, 사용자 경험을 최적화하는 데 중점을 두고 있습니다.`,
        period: '2024년11월~',
        svg: '',
    },
]