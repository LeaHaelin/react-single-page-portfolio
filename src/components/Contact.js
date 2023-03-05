import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    //to email validation
    const [email, setEmail] = useState('');
    //set useState default value to true so that the error sign(exclamation mark and error message) is not working at the first loading.
    const [isValidEmail, setIsValidEmail] = useState(true);
    const emailValidationHandler = (e) => {
        const emailValue = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(emailValue);
        setIsValidEmail(emailRegex.test(emailValue));
    }
    //to send email
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
            <div className="contact__header">
                <h2 className="contact__title">Contact</h2>
                <p className="contact__text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <form className="contact__form" ref={form} onSubmit={sendEmail}>
                <input className='contact__detail name' name='name' type="text" placeholder='name' required />
                {isValidEmail ? null : <p className='email__validation--exclamation'>!</p>}
                <input className={isValidEmail ? 'contact__detail email' : 'contact__detail email--error'} name='email' type="email" value={email} placeholder='email' onChange={emailValidationHandler} />
                {isValidEmail ? null : <p className='email__validation--error'>Sorry, invalid format here</p>}
                <textarea className='contact__detail message' name="message" cols="30" rows="10" placeholder='message' required></textarea>
                <button className='contact__submit' type="submit">send message</button>
            </form>
        </div >
    )
}