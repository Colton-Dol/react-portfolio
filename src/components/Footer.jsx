// TODO: Display text or icon links to my GitHub, LinkedIn, and a third platform.
import './Footer.css';
import GitHub from './GitHub.jsx';
import LinkedIn from '../images/In-White-72.png';
import X from '../images/x-logo-black.png';

function Footer() {
const link = 'https://github.com/Colton-Dol';

    return (
        <div>
            <div className="container text-center">
                <GitHub link={link} />
                <a href='https://www.linkedin.com/in/colton-doling-893bb0341/' target='_blank'><img src={LinkedIn} className='icon p-5'/></a>
                <a href='https://x.com/colton_doling' target='_blank'><img src={X} className='icon rounded ms-5 p-2' style={{backgroundColor: '#ffffff', width: 50}}/></a>
            </div>
        </div>
    );
}

export default Footer;