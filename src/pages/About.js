import { useEffect } from 'react'
const About = () => {
    useEffect(() => {
        document.title = 'Joanna Lin | About'
    }, [])
    return (
        <section className="about" id="about">
            <h1 className="about__title">about</h1>
            <img src="/img/profile.jpg" className="about__img" alt="" />
            <h2 className="about__subtitle">👋 Hi, I'm Joanna Lin.</h2>
            <p className="about__content">
                I'm a third year undergraduate Mathematics and Computer Science student at UNSW Sydney 
                where I also work as a casual academic tutoring COMP1511 Programming Fundamentals.
                In my spare time, I enjoy learning new technologies that allow me to express my creativity through software. 
                In particular, I am fascinated by the artistry of designing and creating minimalistic and beautiful user interfaces. 
                I also enjoy drawing and studying (human 👩) languages, namely Chinese and Japanese.
            </p>
        </section>
        
    )
}

export default About
