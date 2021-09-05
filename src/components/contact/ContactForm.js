import { useState } from 'react'

const DEFAULT = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateMessage = (message) => {
    const re = /^\s*$/;
    return !re.test(String(message));
}

const Contact = ({setDisplaySent, setIsLoading}) => {
    const [ form, setForm ] = useState({...DEFAULT});
    const [ validEmail, setValidEmail ] = useState(true);
    const [ validMessage, setValidMessage ] = useState(true);
    const [ successful, setSuccessful ] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = validateEmail(form.email);
        const isValidMessage = validateMessage(form.message);
        if (!isValidEmail) setValidEmail(false);
        if (!isValidMessage) setValidMessage(false);
        if (!isValidEmail || !isValidMessage) return;
        setIsLoading(true);
        fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(() => {
            setDisplaySent(true)
        }).catch(() => {
            setSuccessful(false)
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setValidEmail(true);
        } else if (name === 'message') {
            setValidMessage(true);
        }
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <section className="contact">
            <h1>contact</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" placeholder="name" value={form.name} onChange={handleChange}/>
                <label htmlFor="email">Your email</label>
                <input className={validEmail? '': 'invalid-input'} type="email" name="email" id="email" placeholder="email" value={form.email} onChange={handleChange} required/>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="subject" onChange={handleChange} value={form.subject}/>
                <label htmlFor="message">Message</label>
                <textarea className={validMessage? '': 'invalid-input'} name="message" placeholder="message" id="message" value={form.message} onChange={handleChange} required></textarea>
                <button type="submit" value="send">send</button>
            </form>
            <p className="form-warning" style={{display: validEmail? 'none': 'block'}}>Please enter a valid email.</p>
            <p className="form-warning" style={{display: validMessage? 'none': 'block'}}>Please enter a non-empty message.</p>
            <p className="form-warning" style={{display: successful? 'none': 'block'}} >Something went wrong.</p>
        </section>
    )
}

export default Contact
