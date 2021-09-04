import { useEffect, useState } from 'react'
import ContactForm from '../components/contact/ContactForm'
import ContactSuccess from '../components/contact/ContactSuccess';
const Contact = () => {
    useEffect(() => {
        document.title = 'Joanna Lin | Contact'
    }, [])
    const [ displaySent, setDisplaySent ] = useState(false);
    return displaySent? <ContactSuccess/>: <ContactForm setDisplaySent={setDisplaySent}/>
}

export default Contact
