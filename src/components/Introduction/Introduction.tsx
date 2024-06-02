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
                    <p className='title'>{`오직 당신만을 위한 1% 디자인
스테디 권현우 입니다.`}</p>
                </div>
                <div className='introduction-text'>
                    <p>{`국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 
대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.
국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 
대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.`}</p>
                    <p>{`국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 
대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.`}</p>
                    <p>{`국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 
대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.`}</p>
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