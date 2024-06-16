import React from 'react';
import "./css/index.css";
import TopBannerContainer from '../../components/TopBanner/containers/TopBannerContainer';
import { images } from '../../assets';
import ProjectSliderContainer from '../../components/ProjectSlider/containers/ProjectSliderContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {
    return (
        <main className='projects-page'>
            <TopBannerContainer
                title='Project'
                src={images.projects.projectmain}
                subtitle={`프로젝트를 진행하면서, 저는 항상 높은 책임감을 가지고 작업에 임하고 있습니다.
각 단계에서 발생하는 문제들을 신속하고 효과적으로 해결하며, 최상의 결과물을 
제공하기 위해 최선을 다하고 있습니다. 또한, 프로젝트의 성공을 위해 팀원들과 
적극적으로 소통하고 협력하며, 주어진 역할과 책임을 성실하게 수행하고 있습니다. 
이러한 책임감은 프로젝트의 완성도와 신뢰성을 높이는 데 중요한 역할을 하고 있으며,
지속적인 성장과 발전을 이끌어가고 있습니다.`}
            />
            <section className='projects-gather-section'>
                {projectsgatherArr.map(({ title, subtitle, lists }, projectIdx) => (
                    <div className='gather-wrapper' key={projectIdx}>
                        <div className='text-wrapper'>
                            <h2 className='title'>{title}</h2>
                            <p className='subtitle'>{subtitle}</p>
                            <ul className='lists'>
                                {lists.map(({ skill }, listIdx) => (
                                    <li key={listIdx} className='list'>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='slider-wrapper'>
                            <ProjectSliderContainer
                                width='800px'
                                projects={companyProjectsArr}
                            />
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};


export default Projects;

const projectsgatherArr = [
    {
        title: '회사 프로젝트',
        subtitle: `회사 프로젝트를 수행하면서, 책임감 있게 주어진 역할을 
완수하고 팀원들과의 원활한 협업을 통해 프로젝트 목표를 
성공적으로 달성했습니다. 이 과정에서 문제 해결 능력과 
기술적 역량을 크게 향상시켰습니다. 또한, 효율적인 소통과 
적극적인 피드백을 통해 프로젝트의 완성도를 높였습니다. 
이러한 경험은 제 성장에 큰 밑거름이 되었습니다.`,
        lists: [
            {
                skill: 'React.js'
            },
            {
                skill: 'Nest.js'
            },
            {
                skill: 'TypeScript'
            },
            {
                skill: 'Firebase'
            },
            {
                skill: 'ReactNative.js'
            },
        ],
        projects: [
            {
                link: '',
                img: images.projects.feelmath
            },
            {
                link: '',
                img: images.projects.monchi
            },
            {
                link: '',
                img: images.projects.natta
            }
        ]
    },
    {
        title: '개인 프로젝트',
        subtitle: `
회사에서 부족함을 느낀 부분을 보완하기 위해 개인 프로젝트를 진행하며 실력을 쌓아왔습니다. 
꾸준한 노력으로 기술적 역량과 
문제 해결 능력을 향상시켰으며, 이를 통해 회사 프로젝트에서도 효과적으로 기여할 수 있었습니다. 개인 프로젝트 경험은 
실무에서의 자신감을 높여주었고, 더 나은 결과를 이끌어내는 데 중요한 역할을 했습니다.`,
        lists: [
            {
                skill: 'React.js'
            },
            {
                skill: 'Nest.js'
            },
            {
                skill: 'TypeScript'
            },
            {
                skill: 'Node.js'
            },
            {
                skill: 'Next.js'
            },
        ]
    },

]

// 회사 프로젝트
const companyProjectsArr = [
    {
        link: '',
        img: images.projects.feelmath
    },
    {
        link: '',
        img: images.projects.monchi
    },
    {
        link: '',
        img: images.projects.natta
    }
]