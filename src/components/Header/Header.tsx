import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
type Props = {
    url: string;
}
// 홈 (Home)
// 소개 (About)
// 프로젝트 (Projects)
// 경력 (Experience)
// 연락처 (Contact)
const Header = ({ url }: Props) => {
    return (
        <header className={`header ${url === '/' && 'header-white'}`}>
            <div className='header-wrapper'>
                <ul className='content-lists'>
                    {contentArr.map(({ content, link }, idx) => (
                        <li className='content-list'>
                            <Link to={link} key={idx} className=''>
                                {content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;

const contentArr = [
    {
        content: 'Home',
        link: '/',
    },
    {
        content: 'About',
        link: '/about',
    },
    {
        content: 'Project',
        link: '/projects'
    },
]