import React, { useState } from 'react';

import { AppBar, Toolbar, IconButton, makeStyles, Drawer, List, ListItem, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';


import ListItemText from '@material-ui/core/ListItemText';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useNavigate } from "react-router";

const useStyles = makeStyles({
    paper: {
        background: 'rgba(66, 66, 66, 0.5)',
        color: 'white',
        marginTop: "60px",
        backdropFilter: "blur(10px)",

    }
});

function AppDrawer(props) {
    const styles = useStyles();
    const [drawerState, setDrawerState] = useState(false); 
    const navigate = useNavigate();
    const goStats = () => {
        navigate("../stats", { replace: true });
    }

    const goCal = () => {
        navigate("../calendar", { replace: true });
    }

    const goDash = () => {
        navigate("../dashboard", { replace: true });
    }

    const goHabits = () => {
        navigate("../habits", { replace: true });
    }

    const logout = () => {
        localStorage.removeItem("jwt");
        navigate("../", { replace: true });
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Drawer anchor="left" open={drawerState} onClose={() => setDrawerState(false)} classes={{ paper: styles.paper }}>
                <List>

                    <ListItem button onClick={goDash}>
                        <ListItemIcon>
                            <DashboardIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>


                    {!props?.isMobile && <ListItem button onClick={goHabits}>
                        <ListItemIcon>
                            <DoneAllIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Habits"  />
                    </ListItem>}

                    <ListItem button onClick={goStats}>
                        <ListItemIcon>
                            <BarChartIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Statistics"  />
                    </ListItem>

                    <ListItem button onClick={goCal}>
                        <ListItemIcon>
                            <CalendarTodayIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItem>


                </List>
            </Drawer>
            <AppBar position="fixed" style={{ backgroundColor: "black", height: 60 }}>
                <Toolbar style={{ alignItems: "center" }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerState(true)}>
                        <MenuIcon />
                    </IconButton>
                    <div style={{ width: "100%", paddingTop: 14 }}>
                        <p style={{ textAlign: "center" }}></p>
                    </div>

                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        classes={{ paper: styles.paper }}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </>

    )
}

export default AppDrawer;