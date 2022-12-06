import { useState } from "react"

async function sendMessage(message: string) {
    const path='http://localhost:5000/messages';
    const body = {
        message
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

export const MessageView = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    
    const handleMessage = async () => {
        const result = await sendMessage(message);
        setStatus("Message sent");
    }
    //     if (result.ok) {
    //         setStatus("Message sent");
    //     } else {
    //         setStatus("Message did not send");
    //     }
    // }
    return<>
        <h1>Send a new message</h1>
        <input value={message} onChange={e =>setMessage(e.target.value)}/>
        <div>{status}</div>
        <button onClick={handleMessage}>Send message</button>
    </>
}