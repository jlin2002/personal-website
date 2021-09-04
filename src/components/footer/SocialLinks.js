import SocialLink from './SocialLink';
const SocialLinks = () => {
    return (
        <ul className="social">
            <li><SocialLink url="https://www.linkedin.com/in/joanna-lin-2a37231a2/" icon="linkedin"/></li>
            <li><SocialLink url="https://github.com/jlin2002" icon="github-square"/></li>
        </ul>
    );
};

export default SocialLinks;
