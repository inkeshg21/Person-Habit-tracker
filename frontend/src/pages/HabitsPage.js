import React, { useState, useEffect, useContext } from 'react';
import HabitBox from '../components/HabitBox';
import ProgressBox from '../components/ProgressBox';
import MotiBox from '../components/MotiBox';
import CalBox from '../components/CalBox';
import StatBox from '../components/StatBox';
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import AppDrawer from '../components/AppDrawer';
import { useNavigate } from "react-router";
import {DevContext} from '../App'


const useStyles = makeStyles({
    paper: {
        background: 'rgba(66, 66, 66, 0.5)',
        color: 'white',
        marginTop:"3.37%",
        backdropFilter: "blur(10px)",
 
    }
});

if(window.matchMedia("(pointer: coarse)").matches) {
    // touchscreen
    console.log("TOUCH")
}

function HabitsPage() {
    const url = useContext(DevContext)
    const styles = useStyles();

    const [verified, setVerified] = useState(0);
    const [drawerState, setDrawerState] = useState(false);
    const [progReload, setProgReload] = useState(false);
    const navigate = useNavigate();
    const progRerender = () => {
        if (progReload === false){
            setProgReload(true);
            console.log("DASHBOARD REREND STATE CHANGE");
        }
        else{
            setProgReload(false);
            console.log("DASHBOARD REREND STATE CHANGE");
        }
    };


    useEffect(() => {
        const jwt = localStorage.getItem('jwt');

     
            axios({

                method: 'post',
                url: `${url}/pageVerify`,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': jwt
                },

            }).then(res => {
                console.log(res.data);
                setVerified(1);
                // store the returned token into local storage




            }).catch(err =>navigate("../", { replace: true }))
       




    }, []);

    
    if (verified === 0) {
        return (
            <div></div>
        )
    }




    return (
        <div className="noSelect" style={{ color: "black" }}>
            <AppDrawer/>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
        

                <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-12 my-col">
                        <ProgressBox rerend={progReload}/>
                    </div>
                </div>
                <div className="row mx-auto justify-content-between align-items-center">
                    <div className="col-12 my-col">
                        <HabitBox setProgReload={setProgReload} hPage={true}/>
                    </div>

                   
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default HabitsPage;