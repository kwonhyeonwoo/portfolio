import React from 'react'
import "./css/index.css";
import { images } from '../../assets'
import TopBannerContainer from '../../components/TopBanner/containers/TopBannerContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
type Props = {}
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
                                <FontAwesomeIcon icon={faInstagram} />                         </div>
                        </div>
                    </div>
                    <div className='subtitle-wrapper'>
                        <p>{`권현우는 항상 성장하고 꾸준히 노력하는 개발자입니다. 저는 최신 기술을 
습득하고 실무에 적용하기 위해 끊임없이 학습하며, 프로젝트의 성공을 위해 최선을 다합니다. 
매일 새로운 도전을 즐기며, 변화하는 기술 환경에 빠르게 적응하는 능력을 갖추고 있습니다. 
이러한 노력은 저의 개발자로서의 역량을 더욱 강화하고 있습니다.`}</p>
                        <p>{`프로젝트를 진행하면서 저는 사용자 경험을 최우선으로 고려합니다. 
UI/UX 디자인에 깊은 관심을 가지고 있으며, 사용자 친화적인 인터페이스를 구현하는 데 주력합니다. 
이를 통해 저는 복잡한 문제를 간단하고 효과적으로 해결하며, 사용자가 쉽게 접근할 수 있는 솔루션을 제공합니다.`}</p>
                        <p>{`또한, 저는 효과적인 커뮤니케이션 능력을 바탕으로 팀 내 협업을 중요하게 생각합니다. 
동료들과의 원활한 소통을 통해 아이디어를 공유하고, 문제를 해결하며, 최상의 결과를 도출하기 위해 노력합니다. 
앞으로도 지속적으로 발전하며, 더욱 혁신적인 솔루션을 제공하기 위해 끊임없이 노력할 것입니다.`}</p>
                    </div>
                </div>
            </section>
            <section className='projects-section'>
                <div className='projects-wrapper'>
                    <div className='projects-title'>
                        <h2>프로젝트에 진심인</h2>
                        <p>항상 성장에 진심이고 새로운 가능성을 일으킵니다.</p>
                    </div>
                    <div className='projects-subtitle'>{`나는 텍스트 블록입니다. 이 텍스트를 변경하려면 편집 버튼을 클릭하세요. Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Ut elittellus, luctus nec ullamcorper mattis, pulvinar 
dapibus leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
culpa qui officia deserunt mollit anim id est labum.`}</div>
                    <div className='img-wrapper'>
                        {projectsArr.map(({ img, description }, idx) => (
                            <div className='img-box'>
                                <img src={images.main.main} alt="projects imgs" />
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
        img: '',
        description: `저는 인테리어 디자인 및 가구 
프로젝트 관리를 전문으로 하고 있습니다.`
    },
    {
        img: '',
        description: `xcepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est labum. 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo Inventore 
veritatis et quasiArchitecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sitv`
    },
    {
        img: '',
        description: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
mollit anim id est labum. Sed ut perspiciatis unde omnis iste natus error 
sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
quae ab illo Inventore veritatis et quasiArchitecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
est, qui dolorem ipsum quia dolor sit`
    }
]
