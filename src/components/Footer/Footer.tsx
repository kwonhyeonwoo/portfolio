import React from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

type Prop = {}
const Footer = (props: Prop) => {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='wrapper'>
                    <div className='my-name'>
                        <p>프론트엔드 | 권현우</p>
                    </div>
                    <div className='tel'>
                        <p>tel: 010-2814-1468</p>
                    </div>
                    <div className='email'>
                        <p>email: khw19980926@gmail.com</p>
                    </div>
                    <div className='address'>
                        <p>address: 대구광역시 동구</p>
                    </div>
                    <div className='github'>
                        <p>
                            <Link to=''>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            kwonhyeonwoo
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;