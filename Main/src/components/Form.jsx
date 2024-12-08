// TODO: Add a form with fields for name, email address, and a message. Load an alert below message if the email is invalid or the message field is empty.
import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <form className="ms-5">
                <div className="mb-3 w-50">
                    <label for="name" className="form-label text-light">Name:</label>
                    <input 
                        value={name}
                        name="name"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 w-50">
                    <label for="email" className="form-label text-light">Email:</label>
                    <input 
                        value={email}
                        name="email"
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 w-50">
                    <label for="message" className="form-label text-light">Message:</label>
                    <textarea 
                        value={message}
                        name="message"
                        className="form-control"
                        rows={10}
                    />
                </div>
                <button type="submit" className="mb-5">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;