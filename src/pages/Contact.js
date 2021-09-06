import { useEffect, useState } from 'react'
import ContactForm from '../components/contact/ContactForm'
import ContactSuccess from '../components/contact/ContactSuccess';
import LoadingSpinner from '../components/misc/LoadingSpinner';
const Contact = () => {
    useEffect(() => {
        document.title = 'Joanna Lin | Contact'
    }, [])
    const [ isLoading, setIsLoading ] = useState(false);
    const [ displaySent, setDisplaySent ] = useState(false);
    if (displaySent) {
        return <ContactSuccess />
    } else if (isLoading) {
        return <section><LoadingSpinner /></section>
    } else {
        return <ContactForm setDisplaySent={setDisplaySent} setIsLoading={setIsLoading}/>
    }
}

export default Contact
