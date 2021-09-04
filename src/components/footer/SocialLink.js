const SocialLink = ({ url, icon }) => {
    return (
        <a 
            rel="noreferrer" 
            href={url}
            className="social__link"
            target="_blank"
        >
            <i className={`social__link__icon fab fa-${icon} fa-3x`}></i>
        </a>
    );
};

export default SocialLink
