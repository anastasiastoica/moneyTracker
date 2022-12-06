import { useState } from "react"

async function searchFlights(departure: string, destination: string, date: string) {
    const path=`http://localhost:5000/flights?departure=${departure}&destination=${destination}&date=${date}`;

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

export const FlightsView = () => {
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    
    const handleFlight = async () => {
        const result = await searchFlights(departure, destination, date);
            
        // const body = await result.json();
        //  if(body.length > 0) {
        //      set("User logged in");
        //  } else {
        //      setMessage("Invalid username or password");
        //  }
    }
    return<div style = {{backgroundColor: "purple"}}>
        <h1>Find your flight</h1>
        <h3>Enter your departure city</h3>
        <input value={departure} onChange={e =>setDeparture(e.target.value)}/>
        <h3>Enter your destination city</h3>
        <input value={destination} onChange={e =>setDestination(e.target.value)}/>
        <h3>Select your departure date</h3>
        <input type="date" value={date} onChange={e =>setDate(e.target.value)}/><br/>
        <button onClick={handleFlight}>Search your flight</button>
    </div>
}