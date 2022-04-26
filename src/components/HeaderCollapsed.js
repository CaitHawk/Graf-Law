import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Headers.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import GavelIcon from '@mui/icons-material/Gavel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        isOpen: false
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, isOpen: open });
    };

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
                <Drawer
                    anchor={'top'}
                    open={state['isOpen']}
                    onClose={toggleDrawer(false)}
                >
                    <NavList />
                </Drawer>
            </React.Fragment>
        </div>
    );
}

function NavList() {
    return (
        <Box>
            <List>
                <ListItem>
                    <Link to="/" className="headerCollapsed-link">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/about" className="headerCollapsed-link">
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText>About</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/services" className="headerCollapsed-link">
                        <ListItemIcon>
                            <GavelIcon />
                        </ListItemIcon>
                        <ListItemText>Services</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/location" className="headerCollapsed-link">
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText>Location</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/contact" className="headerCollapsed-link">
                        <ListItemIcon>
                            <PermContactCalendarIcon />
                        </ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
}
