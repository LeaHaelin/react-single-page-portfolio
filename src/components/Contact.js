import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = ({ iconGithub, iconFrontendM, iconLinkedin, iconTwitter }) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_n4tziu4', 'template_779kkzr', form.current, 'BZhdQ7yZrGx-UNv9b')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text
                )
            });
    };

    return (
        <div className='contact'>
            <h2 className="contact__header">Contact</h2>
            <p className="contact__text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form className="contact__form" ref={form} onSubmit={sendEmail}>
                <input className='contact__details name' name='name' type="text" placeholder='name' required />
                <input className='contact__details email' name='email' type="text" placeholder='email' required />
                <textarea className='contact__details messages' name="message" cols="30" rows="10" placeholder='message' required></textarea>
                <button className='contact__submit' type="submit">send message</button>
            </form>
        </div >
    )
}