import { useState } from "react"
import { measureMemory } from "vm";

async function sendMess(message: string) {
    const path=`http://localhost:5000/messages?message=${message}`;
  

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

export const MessView = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleMess = async () => {
       const result = await sendMess(message);
           
        const body = await result.json();
        if(body.length > 0) {
            setStatus("The message was sent");
        } else {
            setStatus("The message was not sent!");
        }
        
    }
    return<>
        <h1>Write your message</h1>
        <input value={message} onChange={e =>setMessage(e.target.value)}/>
        <div>{status}</div>
        <button onClick={handleMess}>Send</button>
    </>
}