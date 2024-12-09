// TODO: Display text or icon links to my GitHub, LinkedIn, and a third platform.
import './Footer.css';

function Footer() {
const style = {
    background: '#004346'
}

    return (
        <div className="container text-center mt-5" style={style}>
            <a href='https://github.com/Colton-Dol' target='_blank'><img src='./src/assets/images/github-mark-white.png' className="github Icon p-5" /></a>
            <a href='https://linkedin.com'><img src='./src/assets/images/In-White-72.png' className='Icon p-5'/></a>
            <a href=''><img src='./src/assets/images/' className='Icon p-5' /></a>
        </div>
    );
}

export default Footer;