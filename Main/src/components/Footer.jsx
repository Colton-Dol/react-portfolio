// TODO: Display text or icon links to my GitHub, LinkedIn, and a third platform.
import './Footer.css';
import GitHub from './GitHub.jsx';

function Footer() {
const link = 'https://github.com/Colton-Dol';

    return (
        <div className="container text-center mt-5">
            <GitHub link={link} />
            <a href='https://linkedin.com'><img src='./src/assets/images/In-White-72.png' className='icon p-5'/></a>
            <a href=''><img src='./src/assets/images/' className='icon p-5' /></a>
        </div>
    );
}

export default Footer;