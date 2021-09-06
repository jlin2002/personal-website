import React, { useEffect, useRef } from 'react'

const ProjectCard = ({title, description, coverImage, gitHubRepo}) => {
    const cardRef = useRef();
    useEffect(() => {
        cardRef.current.addEventListener('mouseover', () => {
            console.log('hello');
        });
    }, [])
    return (
        <a href={gitHubRepo} target='_blank'>
        <div ref={cardRef} className='projects__card'>
            <div className='projects__card__text'>
                <h2>{title}</h2>
                <img src={`https:${coverImage.fields.file.url}`}/>
                <p style={{overflowWrap: 'break-word'}}>{description}</p>
            </div>
        </div>
        </a>
    )
}

export default ProjectCard
