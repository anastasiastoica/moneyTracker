import { useState } from "react"
import { Link } from "react-router-dom";

async function createAccount(username: string, password: string) {
    const path='http://localhost:5000/users';
    const body = {
        username,
        password
    }

    const response = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });

   return response;
}

export const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleRegister = async () => {
        const result = await createAccount(username, password);

        if (result.ok) {
            setMessage("Account created successfully");
        } else {
            setMessage("Failed to create account");
        }
    }
    return<>
        <h1>Create new account</h1>
        <h3>Username</h3>
        <input value={username} onChange={e => setUsername(e.target.value)}/>
        <h3>Password</h3>
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
        <div>{message}</div>
        <button onClick={handleRegister}>Create account</button>
        <br/>
        <Link to  = "/">Log in </Link>
    </>
}