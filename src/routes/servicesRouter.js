import { Link, Outlet } from 'react-router-dom';

export default function ServicesRouter() {
    return (
        <main>
            <h1>Services Page</h1>
            <Link to="/services/bankruptcy">Bankruptcy</Link>
            <Link to="/services/mediation">Mediation</Link>
            <Outlet />
        </main>
    )
}