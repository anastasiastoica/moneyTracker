import { useState } from "react"

async function searchFlight(departure: string, destination: string, date: string) {
    const path='http://localhost:5000/flights';
    const body = {
        departure,
        destination,
        date
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

export const FlightView = () => {
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    
    const handleFlights = async () => {
        const result = await searchFlight(departure, destination, date);
    }
    return<div style = {{backgroundColor: "pink"}}>
        <h1>Find your flight</h1>
        <h3>Enter your departure city</h3>
        <input value={departure} onChange={e =>setDeparture(e.target.value)}/>
        <h3>Enter your destination city</h3>
        <input value={destination} onChange={e =>setDestination(e.target.value)}/>
        <h3>Select your departure date</h3>
        <input type="date" value={date} onChange={e =>setDate(e.target.value)}/><br/>
        <button onClick={handleFlights}>Search your flight</button>
    </div>
}