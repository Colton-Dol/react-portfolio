// TODO: Have a background image with my name and implement the Navigation component.
import Nav from './Navigation.jsx'

function Header() {
    const style ={
        backgroundImage: `url("./src/assets/images/backgroundImage.avif")`
    }

    return (
        <div className='p-5' style={style}>
            <h1>Colton Doling</h1>
            <Nav />
        </div>
    );
}

export default Header;