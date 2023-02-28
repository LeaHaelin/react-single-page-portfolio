import React from 'react'


export const Nav = ({ iconGithub, iconFrontendM, iconLinkedin, iconTwitter }) => {
    return (
        <div className='nav banner'>
            <h3 className='banner__logo'>adamkeyes</h3>
            <div className='banner__icons'>
                <a href="#"><img src={iconGithub} alt="github icon" className="banner__icon" /></a>
                <a href="#"><img src={iconFrontendM} alt="frontend mentor icon" className="banner__icon" /></a>
                <a href="#"><img src={iconLinkedin} alt="linkedin icon" className="banner__icon" /></a>
                <a href="#"><img src={iconTwitter} alt="twitter icon" className="banner__icon" /></a>
            </div>
        </div>
    )
}
