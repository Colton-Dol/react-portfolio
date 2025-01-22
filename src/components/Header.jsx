// TODO: Have a background image with my name and implement the Navigation component.
import Nav from './Navigation.jsx';
import HeaderBG from '/src/assets/images/headerBackground.png';

function Header() {
    const style ={
        backgroundImage: `url(${HeaderBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className='container-fluid p-3' style={style}>
            <h1 className='text-light pt-3'>Colton Doling</h1>
            <Nav />
        </div>
    );
}

export default Header;