// TODO: Add a form with fields for name, email address, and a message. Load an alert below message if the email is invalid or the message field is empty.
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else {
            setMessage(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const service = import.meta.env.VITE_SERVICE_ID;
        const template = import.meta.env.VITE_TEMPLATE_ID;
        const APIKey = import.meta.env.VITE_EMAILJS_KEY;

        emailjs
        .sendForm(service, template, form.current, {
            publicKey: APIKey,
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setSuccess('Your email has been sent!');
            },
            (error) => {
                console.log('FAILED...', error.text);
                setError(error.text);
            },
        );

        setName('');
        setEmail('');
        setMessage('');
    }

    const handleEmptyFields = () => {
        const pattern = /\S+@\S+\.\S+/
        
        if (name === '') {
            setError('Name is required');
            return false;
        } else if (email === '') {
            setError('Email is required');
            return false;
        } else if (!pattern.test(email)) {
            setError('Your email is invalid');
            return false;
        } else if (message === '') {
            setError('Message is required');
            return false;
        } else {
            setError('');
        }

        return true;
    }

    return (
        <div>
            <form className="ms-5" ref={form} onSubmit={handleSubmit}>
                <div className="mb-3 w-50">
                    <label htmlFor="name" className="form-label text-light">Name:</label>
                    <input 
                        value={name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 w-50">
                    <label htmlFor="email" className="form-label text-light">Email:</label>
                    <input 
                        value={email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 w-50">
                    <label htmlFor="message" className="form-label text-light">Message:</label>
                    <textarea 
                        value={message}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        className="form-control"
                        rows={10}
                    />
                </div>
                <p className="mb-3 text-light">{error}</p>
                <p className="mb-3 text-light">{success}</p>
                <button type="submit" value='Send' className="mb-5 mt-2 btn btn-light">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;