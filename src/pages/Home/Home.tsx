import React from 'react'
import "./css/index.css";
import { images } from '../../assets';
type Props = {}
function Home() {
    return (
        <main className='home-page'>
            <section className='home-section'>
                <div className='home-wrapper'>
                    <div className='img-wrapper'>
                        <img className='img' src={images.main.main} alt="main img" />
                        <div className='introduce-wrapper'>
                            <div className='introuduce-title'>frontend developer</div>
                            <div className='introduce-subtitle'>
                                끊임없이 배우고 성장하는 프론트엔드 개발자입니다.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home