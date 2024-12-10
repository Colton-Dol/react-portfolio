// TODO: Have a background image with my name and implement the Navigation component.
import Nav from './Navigation.jsx';

function Header() {
    const style ={
        backgroundImage: `url("./src/assets/images/background.jpg")`
    }

    return (
        <div className='container-fluid p-5' style={style}>
            <div className='row align-items-center'>
                <h1 className='text-light'>Colton Doling</h1>
                <Nav />
            </div>
        </div>
    );
}

export default Header;