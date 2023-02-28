import React from 'react'

export const Header = () => {
    return (
        <div className='header'>
            <h1 className="header__intro">Nice to meet you! I’m <span className="header__intro--name">Adam Keyes</span>.</h1>
            <p className="header__text">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
            <button className="header__contact contact-me">contact me</button>
        </div >
    )
}
