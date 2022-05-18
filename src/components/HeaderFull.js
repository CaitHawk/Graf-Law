import { NavLink, Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../styles/Headers.css';
import '../styles/DropDownNavTwo.css';
import Logo from '../images/grafLogo2.png';

let activeClassName = 'active'
let unactiveClassName = 'unactive'

export default function HeaderFull() {
    let linksArr = ['Home', 'About', 'Services', 'Contact'];
    let list = linksArr.map(link => (
        <li key={link}>
            <NavLink
                to={link === "Home" ? "/" : link.toLowerCase()}
                className={({ isActive }) =>
                    isActive ? activeClassName : unactiveClassName
                }>
                {link}
                {/* {link === "Services" ? <ArrowDropDownIcon style={{ margin: "none" }} /> : null} */}
            </NavLink>
            {link === "Services" ? <DropDownNav /> : null}
        </li>
    ))
    return (
        <div className="headerFullDiv">
            <img src={Logo} alt="Graf Law Logo" className="logo" />
            <nav className="nav-area">
                <ul style={{ listStyle: 'none' }}
                    className="navUl" >
                    {list}
                </ul>
            </nav>
        </div>
    )
}

function DropDownNav() {
    let serviceLinks = ['Bankruptcy', 'Mediation', 'Divorce', 'Custody', 'Wills and Trusts', 'Traffic Incidents'];
    let serviceList = serviceLinks.map(link => (
        <li key={link.split(" ").join("").toLowerCase()}>
            <NavLink 
                to={"services/" + link.split(" ").join("").toLowerCase()}
                className="dropdown-link"
                >
                    {link}
            </NavLink>
        </li>
    ))
    return (
        <ul className="dropdown">
            {serviceList}
        </ul>
    )
}