import React, { useContext } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { login } from "../api/Backend";
import { useTokenState } from "./TokenContext";


export const LoginPage = () => {
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const {token, setToken} = useTokenState();

    const handleLogin = async () => {
       const result = await login(username, password);
    
        if(!result.ok) {
            setMessage("Invalid username or password");
        }
           
        const body = await result.json();
        if(body.length > 0) {
            setMessage("User logged in");
            setToken(body[0].id); 
        } else {
            setMessage("Invalid username or password");
        }
        
    }

    return<div className="login-style">
        <div className="left-container">
            <img src="https://img.freepik.com/premium-vector/budget-tracking-concept-smartphone-background-statistic-bar-pie-chart-money-calculator-with-flat-outline-style_197170-611.jpg?w=2000"></img>
        </div>

        <div className="right-container">
        <h1 className="h-style">Login</h1>
        <h3>Username</h3>
        <input value={username} onChange={e =>setUsername(e.target.value)}/>
        <h3>Password</h3>
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
        <div>{message}</div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <br/>
        <Link to  = "/register">Or create new account</Link>
        </div>
    </div>
}