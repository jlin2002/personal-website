import { useEffect, useState } from "react"
import ProjectCards from "../components/projects/ProjectCards";
import LoadingSpinner from "../components/misc/LoadingSpinner";
const Projects = () => {
    const [ projects, setProjects ] = useState(null)
    useEffect(() => {
        document.title = 'Joanna Lin | Projects';
        fetch('/.netlify/functions/projects')
        .then(response => response.json())
        .then(response => {
            setProjects(response.map((item) => ({...item.fields, id: item.sys.id})))
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section className='projects'>
            <h1>projects</h1>
            <p className='projects__instruction'>Click to view on GitHub</p>
            {projects === null? <LoadingSpinner/>: <ProjectCards blogs={projects} />}
        </section>
    )
}

export default Projects 
