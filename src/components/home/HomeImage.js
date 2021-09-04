import { useState } from 'react'
const HomeImage = ({ setActiveID, activeID, id, src, label }) => {
    const [ isHovering, setIsHovering ] = useState(false);
    const shouldHighlight = (activeID === id) || isHovering;
    const toggleActivity = (e) => {
        e.stopPropagation()
        setActiveID(id === null? null: id);
    }
    return (
        <div 
            onClick={toggleActivity}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            className="home-image-wrapper"
        >
            <img className={`home-image ${shouldHighlight && 'active'}`} src={src} alt=""/>
            <p className={`${shouldHighlight && 'active'}`}>{label}</p>
        </div>
    )
}

export default HomeImage
