// TODO: Display text or icon links to my GitHub, LinkedIn, and a third platform.
import './Footer.css';
import GitHub from './GitHub.jsx';

function Footer() {
const link = 'https://github.com/Colton-Dol';

    return (
        <div>
            <div className="container text-center">
                <GitHub link={link} />
                <a href='https://linkedin.com' target='_blank'><img src='./src/assets/images/In-White-72.png' className='icon p-5'/></a>
                <a href='https://x.com/colton_doling' target='_blank'><img src='./src/assets/images/x-logo-black.png' className='icon rounded ms-5 p-2' style={{backgroundColor: '#ffffff', width: 50}}/></a>
            </div>
            <div className='text-center ms-3'>
                <p className='text-light'>Old portfolio background by <a href='https://freepik.com' target='_blank' className='link-underline-opacity-0 link-secondary'>Freepik</a></p>
            </div>
        </div>
    );
}

export default Footer;