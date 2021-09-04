import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../../App';
const Logo = () => {
    const { handleLinkClick } = useContext(NavContext);
    return (
        <Link onClick={handleLinkClick} className="in-site-link logo" id="home-link" to="/"><h1>joanna lin</h1></Link>
    );
};

export default Logo;