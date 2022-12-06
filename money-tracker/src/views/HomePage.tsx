import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "./LogoutButton"
import { ProtectedPage } from "./ProtectedPage"
import { useTokenState } from "./TokenContext";

async function loadAllProducts(token: string) {
    const path=`http://localhost:5000/product`;
  

    const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    
    });

   return response;
}

interface Product {
    id?: number;
    name?: string;
    picture?: string;
}

export const HomePage= () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {token} = useTokenState();

    useEffect(() => {
        async function load() {
            const response = await loadAllProducts(token);
            if(response.ok) {
                setProducts(await response.json());
            }
        }
        load();
    }, [token]);

    const productListView = products.map(product => {
        return <p key = {product.id}><Link to = {"/product/" + product.id}>{product.name}</Link></p>
    })

    return<ProtectedPage>
        <h1>Hello World</h1>
        {productListView}
        <LogoutButton/>
    
    </ProtectedPage>
}