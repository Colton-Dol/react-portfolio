// TODO: Use the react-router-dom to create links for About Me, Portfolio, Contact, and Resume.
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav justify-content-end mb-2'>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Resume'
                    className={currentPage === '/Resume' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Nav;