import React from 'react'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero__content">
                <h1 className="hero__intro">Nice to meet you! I’m <span className="hero__intro--name">Adam Keyes</span>.</h1>
                <p className="hero__text">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <button className="hero__contact contact-me">contact me</button>
            </div>
        </div >
    )
}
