import { useEffect } from 'react'
const About = () => {
    useEffect(() => {
        document.title = 'Joanna Lin | About'
    }, [])
    return (
        <section className="about" id="about">
            <h1 className="about__title">about</h1>
            <img src="/img/profile.png" className="about__img" alt="" />
            <h2 className="about__subtitle">👋 Hi, I'm Joanna Lin.</h2>
            <p className="about__content">
                I graduated from UNSW Sydney with a degree in Science (Mathematics) and Computer Science.
                In my spare time, I enjoy learning new technologies that allow me to express my creativity through software. 
                In particular, I am fascinated by the artistry of designing and creating minimalistic and beautiful user interfaces. 
                I also enjoy drawing and studying (human 👩) languages, namely Chinese and Korean.
            </p>
        </section>
        
    )
}

export default About
