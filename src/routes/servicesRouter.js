import { Link, Outlet } from 'react-router-dom';
import "../styles/ServicesPageStyles.css";

export default function ServicesRouter() {
    return (
        <main className="servicesMain">
            <ServicesNavbarFull className="ServicesNavbarFull" />
            <ServicesNavbarCollapsed className="ServicesNavbarCollapsed" />
            <Outlet />
        </main>
    )
}

function ServicesNavbarFull() {
    return (
        <div className="servicesNavbarFull">
            <nav className="servicesNavbar">
                <Link to="/services/bankruptcy">Bankruptcy</Link>
                <Link to="/services/mediation">Mediation</Link>
                <Link to="/services/divorce">Divorce</Link>
                <Link to="/services/custody">Custody</Link>
                <Link to="/services/willsandtrusts">Wills and Trusts</Link>
                <Link to="/services/trafficincidents">Traffic Incidents</Link>
            </nav>
        </div>
    )
}

function ServicesNavbarCollapsed() {
    return (
        <div className="servicesNavbarCollapsed">
            <h1>Hello World</h1>
        </div>
    )
}