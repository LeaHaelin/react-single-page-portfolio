import React from 'react'

export const Contact = ({ iconGithub, iconFrontendM, iconLinkedin, iconTwitter }) => {
    return (
        <div className='contact'>
            <h2 className="contact__header">Contact</h2>
            <p className="contact__text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form className="contact__form" action="mailto:lea8haelin@gmail.com">
                <input className='contact__details name' type="text" placeholder='name' required />
                <input className='contact__details email' type="text" placeholder='email' required />
                <textarea className='contact__details messages' name="" id="" cols="30" rows="10" placeholder='message' required></textarea>
                <button className='contact__submit' type="submit">send message</button>
            </form>
        </div >
    )
}