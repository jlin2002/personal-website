import { useContext } from 'react';
import { NavContext } from '../../App';

const NavButton = () => {
    const { setShowNav } = useContext(NavContext);
    const toggleNav = () => {
        setShowNav(showNav => !showNav);
    };
    return (
        <button onClick={toggleNav} className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default NavButton;