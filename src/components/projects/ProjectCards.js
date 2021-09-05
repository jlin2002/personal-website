import React from 'react'

const BlogCards = ({blogs}) => {
    return (
        <div>
            {blogs.map(blog => <p key={blog.id}>{blog.title}</p>)}
        </div>
    )
}

export default BlogCards
