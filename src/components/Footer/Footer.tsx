import React from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
type Prop = {}
const Footer = (props: Prop) => {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-about'>
                    <h2 className='title'>Get In touch</h2>
                    <p className='text'>{`You can use a few enticing words and flaunt your 
capabilities that will attract future clients and 
encourage them to hire you right away.`}</p>
                </div>
                <div className='contact-wrapper'>
                    <div className='contact-detail'>
                        <div className='contact-title'>
                            Contact Details
                        </div>
                        <div className='contact-name'>Kwon hyeon woo</div>
                        <div className='contact-phone'>
                            <p className='phone'>phone:</p>
                            <p className='number'>010-2814-1468</p>
                        </div>
                        <div className='email-wrapper'>
                            <p>Email:</p>
                            <p>khw19980926@gamil.com</p>
                        </div>
                    </div>
                </div>
                <div className='location-wrapper'>
                    <div className='location'>
                        <p className='title'>Location</p>
                        <div className='location-detail'>
                            <p className=''>대구광역시 동구</p>
                            <p>신암동</p>
                        </div>
                    </div>
                    <div className='follow'>
                        <p>Follow Me</p>
                        <div className='sns-wrapper'>
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;