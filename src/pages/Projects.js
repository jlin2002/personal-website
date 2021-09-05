import { useEffect, useState } from "react"
import ProjectCards from "../components/projects/ProjectCards";
import LoadingSpinner from "../components/contact/LoadingSpinner";
const Projects = () => {
    const [ projects, setProjects ] = useState([])
    useEffect(() => {
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
            {projects.length === 0? <LoadingSpinner/>: <ProjectCards blogs={projects} />}
        </section>
    )
}

export default Projects 
