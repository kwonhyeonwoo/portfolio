import React from 'react';
import "./css/index.css";
import { images } from '../../assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import CustomButtonContainer from '../Custom/CustomButton/containers/CustomButtonContainer';
type Prop = {

}
const Introduction = (props: Prop) => {
    return (
        <div className='introduction-wrapper'>
            <div className='introduction-text-wrapper'>
                <div className='introduction-title'>
                    <h2 className='title'>권현우</h2>
                    <p className='title'>{`오직 당신만을 위한 맞춤형 솔루션
스테디 개발자 권현우입니다.`}</p>
                </div>
                <div className='introduction-text'>
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
                <div className='button-wrapper'>
                    <CustomButtonContainer title='About' link='' />
                </div>
                {/* <div className='button'>
                    <Link to=''>
                        <button><p>About</p> <FontAwesomeIcon icon={faArrowRightLong} /></button>
                    </Link>
                </div> */}
            </div>
            <div className='profile-img'>
                <img src={images.about.profile} alt="profile" />
            </div>
        </div>
    );
};

export default Introduction;