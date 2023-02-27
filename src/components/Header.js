import React from 'react'
import photoMB from '../assets/images/image-profile-mobile.webp';
import photoTB from '../assets/images/image-profile-tablet.webp';
import photoDT from '../assets/images/image-profile-desktop.webp';

export const Header = () => {
    return (
        <div className='header'>
            <picture>
                <source media="(min-width: 1400px)" srcset={photoDT} />
                <source media="(min-width: 760px)" srcset={photoTB} />
                <img src={photoMB} alt="profile" />
            </picture>
            <div className="header__contents">
                <h1 className="header__intro">Nice to meet you! I’m <span className="header__name">Adam Keyes</span> Adam Keyes.</h1>
                <p className="header__text">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <button className="header__contact contact-me">contact me</button>
            </div>
        </div>
    )
}
