import { useContext } from 'react';
import { NavContext } from '../../App';
import NavLink from './NavLink';
const NavLinks = () => {
    const { showNav, handleLinkClick } = useContext(NavContext);
    return (
        <div onClick={handleLinkClick} className={`nav-items-wrapper ${showNav && "darken"}`}>
            <ul onClick={(e) => e.stopPropagation()} className="nav-items">
                <li><NavLink page='about'/></li>
                <li><NavLink page='contact'/></li>
            </ul>
        </div>
    )
}

export default NavLinks
