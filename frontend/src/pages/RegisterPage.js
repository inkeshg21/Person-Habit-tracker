import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button, Checkbox, Link } from '@material-ui/core';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/TheCall.mp4';
import backgroundOne from '../images/wallpaperflare.com_wallpaper1.png';
import { useNavigate } from "react-router";
import {DevContext} from '../App'
import '../styles/styles.css'





function RegisterPage(props) {

    const url = useContext(DevContext)
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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
            goDashboard();
            // store the returned token into local storage
        }).catch(err => console.log(err))
    }, []);

    const register = (event) => {
        event.preventDefault();

        const loginInfo = JSON.stringify({
            email: email,
            password: password,
            name: firstName + " " + lastName
        })
            axios({
                method: 'post',
                url: `${url}/user/register`,
                data: loginInfo,
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                login();

            }).catch(err => setMessage(err.response.data))
    }

    const login = () => {

        const loginInfo = JSON.stringify({
            email: email,
            password: password
        })
            axios({
                method: 'post',
                url: `${url}/user/login`,
                data: loginInfo,
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                console.log(res.data + "YOOOO");
                // store the returned token into local storage
                const jwt = res.data;
                localStorage.setItem('jwt', jwt);
                goDashboard();
            }).catch(err => setMessage(err.response.data))
    }

    const goLogin = async event => {
        event.preventDefault();
        navigate("../", { replace: true });
    }

    const goDashboard = () => {
        navigate("../dashboard", { replace: true });
    }


    if (!props.isMobile)
    return (

        <div className="register-page">
            <div id="register-box">

                <form id="register-side" autoComplete="off" onSubmit={register}>
                    <h3>Register</h3>
                        <input autoComplete="false" name="hidden" type="text" style={{display:"none"}}/>
                        <input type="text" placeholder="First Name" onChange={(c) => setFirstName(c.target.value)}></input>
                        <input type="text" placeholder="Last Name" onChange={(c) => setLastName(c.target.value)}></input>
                        <input type="text" placeholder="Email" autoComplete="new-email"  onChange={(c) => setEmail(c.target.value)}></input>
                        <input type="password" placeholder="Password" autoComplete="new-password" onChange={(c) => setPassword(c.target.value)}></input>

                        <div>
                            <Button id="register-button" type='submit' disabled={!(email && password)}>Register</Button>
                            <div id='remember'>
                                <span >
                                    <Checkbox />
                                    Remember Me
                                </span>

                                <Link href='#' onClick={() => navigate("../", { replace: true })} id="login-link">Login?</Link>
                            </div>
                            <span id='error'>{message}</span>
                        </div>
                 

                </form>
                <div id="image-side-reg">
                </div>
            </div>
        </div>
        
    );
    else
    return (
       


       
       

        <div className="register-page">
            <div id="register-box-mobile">

                <form id="register-side-mobile" autoComplete="off" onSubmit={register}>
                    <h3>Register</h3>
                        <input autoComplete="false" name="hidden" type="text" style={{display:"none"}}/>
                        <input type="text" placeholder="First Name" onChange={(c) => setFirstName(c.target.value)}></input>
                        <input type="text" placeholder="Last Name" onChange={(c) => setLastName(c.target.value)}></input>
                        <input type="text" placeholder="Email" autoComplete="new-email"  onChange={(c) => setEmail(c.target.value)}></input>
                        <input type="password" placeholder="Password" autoComplete="new-password" onChange={(c) => setPassword(c.target.value)}></input>

                        <div>
                            <Button id="register-button" type='submit' disabled={!(email && password)}>Register</Button>
                            <div id='remember'>
                                <span >
                                    <Checkbox />
                                    Remember Me
                                </span>

                                <Link href='#' onClick={() => navigate("../", { replace: true })} id="login-link">Login?</Link>
                            </div>
                            <span id='error'>{message}</span>
                        </div>
                 
                </form>
            </div>
        </div>

       


    )

}



export default RegisterPage;
