import { useContext } from 'react';
import { NavContext } from '../../App'
import { Link } from 'react-router-dom';
    
const NavLink = ({ page }) => {
    const { handleLinkClick } = useContext(NavContext);
    return (
        <Link onClick={handleLinkClick} className="in-site-link nav-items__link" to={`/${page}`}>{page}</Link>
    );
};

export default NavLink;