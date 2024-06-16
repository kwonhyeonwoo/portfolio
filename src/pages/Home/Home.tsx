import React from 'react'
import "./css/index.css";
import { images } from '../../assets';
import ProjectSliderContainer from '../../components/ProjectSlider/containers/ProjectSliderContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
type Prop = {
}
function Home(pros: Prop) {
    return (
        <main className='home-page'>
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
            <section className='service-section'>
                <div className='service-wrapper'>
                    <div className='title-wrapper'>
                        <div className='title-box'>
                            <p className='sm-text'>WHAT I DO</p>
                            <p className='text'>Services</p>
                        </div>
                        <Link to={'/projects'} className='projects-move'>
                            <div className='move-text'>View all Services </div>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>
                    <div className='introduction-number'>
                        {introductionArr.map(({ num, title, description }, idx) => (
                            <div className='introduction-box'>
                                <p className='num'>{num}</p>
                                <p className='title'>{title}</p>
                                <p className='description'>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='projects-wrapper'>
                    <div className='projects-text'>
                        <p className='sm-text'>MOST RECENT</p>
                        <p className='title'>Projects</p>
                        <p className='sub-text'>{`제 포트폴리오에서는 리액트, 리액트 네이티브, 그리고 NestJS를 활용한 
다양한 프로젝트를 통해 웹 및 모바일 애플리케이션 개발 능력을 증명하고 있습니다. 
각 프로젝트는 컴포넌트 기반의 UI 설계, 효율적인 상태 관리, 그리고 백엔드 서버 
구축 등 실무 중심의 기술을 적용하여 완성되었습니다. 이러한 경험을 통해 다양한 
기술 스택을 익히고, 문제 해결 능력을 향상시켜왔습니다.`}
                        </p>
                        <Link to={'/projects'} className='view-projects'>
                            <p>View all Servies </p>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link >
                    </div>
                    <div className='project-img-wrapper'>
                        <div className='project-img-box'>
                            <ProjectSliderContainer projects={projectsArr} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;
const projectsArr = [
    {
        img: images.main.main,
        link: '/'
    },
    {
        img: images.main.main,
        link: '/'
    },
]
const introductionArr = [
    {
        num: '01.',
        title: 'React',
        description: `리액트는 사용자 인터페이스를 구축하기 위한 자바스크립트 
라이브러리로,컴포넌트 기반의 구조를 통해 효율적인 상태 
관리와 빠른 렌더링을 지원합니다.단일 페이지 애플리케이션 
개발에 최적화되어 있으며, 재사용 가능한 UI 컴포넌트를 
쉽게 만들 수 있습니다.`
    },
    {
        num: '02.',
        title: 'ReactNative',
        description: `리액트 네이티브는 모바일 애플리케이션 개발을 위한 
프레임워크로,리액트와 동일한 컴포넌트 기반 구조를 
사용하여 iOS와 안드로이드에서 모두 작동하는 네이티브 
앱을 제작할 수 있습니다. 이를 통해 자바스크립트로 
네이티브 성능을 갖춘 앱을 개발할 수 있습니다.`
    },
    {
        num: '03.',
        title: 'NestJs',
        description: `NestJS는 효율적이고 확장 가능한 서버사이드 
애플리케이션을 구축하기 위한 프레임워크로, 
현재 프로젝트를 통해 실력을 쌓아가고 있습니다. 
Typescript를 기반으로 한 모듈식 아키텍처를 활용하여 
백엔드 개발 경험을 넓혀가고 있습니다.`
    },
]
