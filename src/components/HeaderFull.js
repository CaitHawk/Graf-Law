import { NavLink } from 'react-router-dom';
import '../styles/Headers.css';

export default function HeaderFull() {
    let linksArr = ['Home', 'About', 'Services', 'Location', 'Contact'];
    let activeClassName = 'active'
    let list = linksArr.map( link => (
        <li key={link}>
            <NavLink
                to={link === "Home" ? "/" : link.toLowerCase()}
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>
                {link}
            </NavLink>
        </li>

    ))

    return (
        <div className="headerFullDiv">
            <h1 className="headerTitle">Graf Law</h1>
            <nav>
                <ul style={{ listStyle: 'none' }}
                    className="navUl" >
                    { list }
                </ul>
            </nav>
        </div>
    )

}