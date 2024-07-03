import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
//import Button from 'react-bootstrap/esm/Button';
import { Button, Checkbox, Link } from '@material-ui/core';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/into-the-valley.mp4';
import backgroundTwo from '../images/wallpaperflare.com_wallpaper2.png';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router";
import { DevContext } from '../App'






function LoginPage(props) {

    const url = useContext(DevContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [verified, setVerified] = useState(0);
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
            setVerified(1);
            window.location.href = '/dashboard';
            // store the returned token into local storage




        }).catch(err => setVerified(2))





    }, []);


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
                // store the returned token into local storage
                const jwt = res.data;
                localStorage.setItem('jwt', jwt);
                goDashboard();

            }).catch(err => setMessage(err.response.data))

    }

    const goRegister = async event => {
        event.preventDefault();
        navigate("../register", { replace: true });
    }

    const goDashboard = () => {
        window.location.href = '/Dashboard';
    }

    if (verified === 0 || verified === 1) {
        return (
            <div></div>
        )
    }

    if (!props.isMobile)
        return (

            <div className="login-page">
            <div id="login-box">
                <div id="image-side">
                </div>
                <div id="login-side">
                    <h3>Login</h3>
                    <input type="text" placeholder="Email" onChange={(c) => setEmail(c.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={(c) => setPassword(c.target.value)}></input>
                    <div>
                        <Button id="login-button" onClick={login} disabled={!(email && password)}>Login</Button>
                        <div id='remember'>
                            <span >
                                <Checkbox />
                                Remember Me
                            </span>

                            <Link href='#' onClick={()=>navigate("../register", { replace: true })} id="register-link">Register?</Link>
                        </div>
                        <span id='error'>{message}</span>
                    </div>

                </div>
            </div>
        </div>
        );

    else
        return (
            <div className="login-page">
            <div id="login-box-mobile">
                <div id="login-side-mobile">
                    <h3>Login</h3>
                    <input type="text" placeholder="Email" onChange={(c) => setEmail(c.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={(c) => setPassword(c.target.value)}></input>
                    <div>
                        <Button id="login-button" onClick={login} disabled={!(email && password)}>Login</Button>
                        <div id='remember'>
                            <span >
                                <Checkbox />
                                Remember Me
                            </span>

                            <Link href='#' onClick={()=>navigate("../register", { replace: true })} id="register-link">Register?</Link>
                        </div>
                        <span id='error'>{message}</span>
                    </div>

                </div>
            </div>
        </div>
        );
                   
        
}



export default LoginPage;
