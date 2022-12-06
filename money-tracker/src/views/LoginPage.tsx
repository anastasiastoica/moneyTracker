import React, { useContext } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useTokenState } from "./TokenContext";

async function login(username: string, password: string) {
    const path=`http://localhost:5000/users?username=${username}&password=${password}`;
  

    const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    
    });

   return response;
}

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

    return<>
        <h1>Login</h1>
        <h3>Username</h3>
        <input value={username} onChange={e =>setUsername(e.target.value)}/>
        <h3>Password</h3>
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
        <div>{message}</div>
        <button onClick={handleLogin}>Login</button>
        <br/>
        <Link to  = "/register">or create new account</Link>
    </>
}