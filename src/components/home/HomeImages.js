import { useState, useEffect } from 'react';
import HomeImage from './HomeImage';
import data from '../../assets/data/home';

const HomeImages = () => {
    const [ activeID, setActiveID ] = useState(null);
    useEffect(() => {
        const deactivateImages = () => {
            setActiveID(null);
        }
        const background = document.querySelector('section.home');
        background.addEventListener('click', deactivateImages); 
        return () => {
            background.removeEventListener('click', deactivateImages);
        }
    }, []);
    return (
        <div className="home-images">
            {data.map((img) => <HomeImage 
                key={img.id} {...img} 
                activeID={activeID} 
                setActiveID={setActiveID} 
            />)}
        </div>
    );
};

export default HomeImages;
