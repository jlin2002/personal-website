import ProjectCard from './ProjectCard'
import Masonry from 'react-masonry-css'
const ProjectCards = ({blogs}) => {
    return (
        <Masonry
            breakpointCols={{
                default: 2,
                600: 1
            }}
            className="my-masonry-grid projects__cards"
            columnClassName="my-masonry-grid_column"
        >
            {blogs.map(blog => <ProjectCard key={blog.id} {...blog}/>)}
        </Masonry>
    )
}

export default ProjectCards
