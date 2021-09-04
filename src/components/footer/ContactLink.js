import { Link } from 'react-router-dom';
const ContactLink = () => {
    return (
        <h2 className="contact-me">
            For any inquiries, contact me <Link to="/contact">here</Link>.
        </h2>
    )
}

export default ContactLink
