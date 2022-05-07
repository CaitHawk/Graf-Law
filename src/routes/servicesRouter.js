import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/ServicesPageStyles.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Bankruptcy',
                    'Custody',
                    'Divorce',
                    'Mediation',
                    'Traffic Incidents',
                    'Wills and Trusts']
                    .map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
            </List>
        </Box>
    );

    return (
        <div className='servicesNavbarCollapsed'>
            <React.Fragment>                
                <Button
                    onClick={toggleDrawer('left', true)}
                    className='collapsedButton'>
                    <ArrowForwardIosIcon fontSize='small' />
                </Button>
                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    className='servicesNavbarDrawer'
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}