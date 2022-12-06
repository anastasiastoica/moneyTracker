import path from "path";
import { useEffect, useState } from "react";
import { Transaction } from "../modules/HomePage";
import { useTokenState } from "../modules/TokenContext";

export async function get(path: string, token:string|undefined = undefined) {
    const url=`http://localhost:5000/${path}`;
    

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token??""
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    
    });

   return response;
}

export async function post<T>(path: string, token: string, body:T) {
    const url=`http://localhost:5000/${path}`;

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token??""
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });

   return response;
}

export async function login(username: string, password: string) {
    const path=`users?username=${username}&password=${password}`;
    return await get(path);
}

export async function getTransactionTypes(token: string){
    return await get("transaction_type", token);
}
export async function getTransactions(token: string){
    return await get("transaction", token);
}

export function useAsyncState<T>(path: string, defaultValue: T): [T, ()=>void]{
    const [state, setState] = useState<T>(defaultValue);
    const [timestamp, setTimestamp] = useState(new Date().getTime());
    const {token} = useTokenState();
    
    useEffect(() => {
      async function load() {
          const response = await get(path, token);
          if(response.ok) {
            setState(await response.json());
          }
      }
      load();
    }, [token, timestamp]);   

    function reload() {
        setTimestamp(new Date().getTime());
    }

    return [state, reload];
}


