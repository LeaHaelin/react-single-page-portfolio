import React from 'react'

export const Footer = ({ iconGithub, iconFrontendM, iconLinkedin, iconTwitter }) => {
    return (
        <div className='footer banner'>
            <h3 className='banner__logo'>adamkeyes</h3>
            <div className='banner__icons'>
                <img src={iconGithub} alt="github icon" className="banner__icon" />
                <img src={iconFrontendM} alt="frontend mentor icon" className="banner__icon" />
                <img src={iconLinkedin} alt="linkedin icon" className="banner__icon" />
                <img src={iconTwitter} alt="twitter icon" className="banner__icon" />
            </div>
        </div>
    )
}
