import { useEffect } from 'react'
import data from '../assets/data/about'
const About = () => {
    useEffect(() => {
        document.title = 'Joanna Lin | About'
    }, [])
    return (
        <section className="about" id="about">
            <h1 className="about__title">about</h1>
            <img src="/img/profile.jpg" className="about__img" alt="" />
            <h2 className="about__subtitle">{data.title}</h2>
            <p className="about__content">
                I'm a <strong>{data.status}</strong>
                where I also work as a <strong>{data.work}</strong> {data.role} 
                {data.hobbies}
            </p>
        </section>
        
    )
}

export default About
