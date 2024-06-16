import React from 'react'
import "./css/index.css";
import { images } from '../../assets'
import TopBannerContainer from '../../components/common/TopBanner/containers/TopBannerContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
function About() {
    return (
        <main className='about-page'>
            <TopBannerContainer
                src={images.main.main}
                title='About me'
                subtitle='끊임없이 배우고 성장하는 프론트엔드 개발자입니다.'
            />
            <section className='about-section'>
                <div className='about-wrapper'>
                    <div className='title-wrapper'>
                        <h2 className='title'>{`오직 당신만을 위한 맞춤형 솔루션
스테디 개발자 권현우입니다.`}</h2>
                        <div className='sns-wrapper'>
                            <p>팔로우</p>
                            <div className='sns-img'>
                                <FontAwesomeIcon icon={faGithub} />
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                    <div className='subtitle-wrapper'>
                        <p>{`권현우는 항상 성장하고 꾸준히 노력하는 개발자입니다. 저는 최신 기술을 습득하고 실무에 
적용하기 위해 끊임없이 학습하며, 프로젝트의 성공을 위해 최선을 다합니다.매일 새로운 도전을 즐기며, 
변화하는 기술 환경에 빠르게 적응하는 능력을 갖추고 있습니다. 이러한 노력은 저의 개발자로서의 
역량을 더욱 강화하고 있습니다.프로젝트를 진행하면서 저는 사용자 경험을 최우선으로 고려합니다. 
UI/UX 디자인에 깊은 관심을 가지고 있으며, 사용자 친화적인 인터페이스를 구현하는 데 주력합니다. 
이를 통해 저는 복잡한 문제를 간단하고 효과적으로 해결하며, 사용자가 쉽게 접근할 수 있는 솔루션을 제공합니다.
또한, 저는 효과적인 커뮤니케이션 능력을 바탕으로 팀 내 협업을 중요하게 생각합니다. 
동료들과의 원활한 소통을 통해 아이디어를 공유하고, 문제를 해결하며, 최상의 결과를 도출하기 위해 노력합니다. 
앞으로도 지속적으로 발전하며, 더욱 혁신적인 솔루션을 제공하기 위해 끊임없이 노력할 것입니다.
`}
                        </p>
                    </div>
                </div>
            </section>
            <section className='projects-section'>
                <div className='projects-wrapper'>
                    <div className='projects-title'>
                        <h2>개발에 진심인</h2>
                        <p>항상 성장에 진심이고 새로운 가능성을 일으킵니다.</p>
                    </div>
                    <div className='projects-subtitle'>{`개발에 진심인 저는 항상 성장과 혁신을 추구하며 새로운 가능성을 열어갑니다. 기술의 한계를 뛰어넘고 끊임없이 
배우며, 더 나은 솔루션을 제공하기 위해 최선을 다합니다. 최신 기술 트렌드와 도구를 적극적으로 활용하여 
최고의 결과를 창출합니다. 열정과 헌신으로 가득 찬 저는, 창의적인 문제 해결과 탁월한 성과를 통해 고객의 
성공을 이끌어갑니다. 함께 협력하고 도전하는 과정을 통해, 지속적인 발전과 성장을 이루어내며, 세상에 긍정적인 
변화를 만들어가는 데 기여합니다.`}</div>
                    <div className='img-wrapper'>
                        {projectsArr.map(({ img, description }, idx) => (
                            <div className='img-box' key={idx}>
                                <img src={img} alt="projects imgs" />
                                <div className='about-description'>{description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    )
}

export default About

const projectsArr = [
    {
        img: images.projects.monchi,
        description: `끊임없는 학습과 혁신을 통해 최적의 성능과 
유용성을 제공하는 데 주력하고 있습니다.`
    },
    {
        img: images.projects.natta,
        description: `프로젝트를 시작하면서 저는 리액트를 활용한 웹 애플리케이션 개발에 집중하고 있습니다. 
처음에는 낯선 기술과 개념들로 인해 많은 어려움을 겪었지만, 꾸준한 학습과 실습을 
통해 점차 자신감을 쌓아가고 있습니다. 컴포넌트 기반의 UI 설계와 상태 관리 
기법을 익히면서 코드의 재사용성과 유지보수성을 높이는 방법을 배우고 있습니다. 
또한, 팀원들과의 협업을 통해 다양한 시각에서 문제를 바라보고 해결하는 능력을 
키우고 있으며, 코드 리뷰를 통해 더 나은 코드 품질을 유지하는 법을 익히고 있습니다. 
이러한 과정은 저에게 단순한 기술 습득 이상의 가치를 주고 있으며, 실무에서의 적용 
가능성을 높이는 데 큰 도움이 되고 있습니다.`
    },
    {
        img: images.projects.feelmath,
        description: `리액트 네이티브와 NestJS를 사용하여 모바일 애플리케이션을 개발하고 있습니다. 
이 과정에서 저는 단순한 기능 구현을 넘어, 사용자 경험을 최적화하기 위한 다양한 
기법을 학습하고 적용하고 있습니다. 특히, 백엔드 서버 구축과 API 통합 작업을 통해 
풀스택 개발자로서의 역량을 키워가고 있습니다. 새로운 기술을 배우고 적용하는 과정에서 
많은 도전과 난관을 마주하고 있지만, 이러한 경험은 오히려 저에게 큰 성장의 기회가 되고 있습니다. 
문제를 해결하기 위해 깊이 있는 연구와 실험을 반복하며, 점차 더 나은 해결책을 찾는 능력을 기르고 있습니다.
이러한 프로젝트 경험을 통해 저는 단순한 기술적인 성장뿐만 아니라, 문제 해결 능력과 창의적인 사고,
그리고 팀원들과의 협업 능력까지 다양한 측면에서 성장하고 있습니다. 앞으로도 지속적인 학습과 도전을 
통해 더 큰 성장을 이루고, 실무에서 가치 있는 개발자가 되기 위해 노력할 것입니다.`
    }
]
