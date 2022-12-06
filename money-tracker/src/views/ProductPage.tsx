import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProtectedPage } from "./ProtectedPage";
import { useTokenState as useTokenState } from "./TokenContext";

async function loadProduct(productId: string, token: string) {
    const path=`http://localhost:5000/product/${productId}`;
  

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

export const ProductPage = () => {
    const [product, setProduct] = useState<any>({});
    const {token} = useTokenState();
    const {productId} = useParams();
    

    useEffect (() => {
            async function load() {
                const result = await loadProduct(productId ?? "", token);
                if(!result.ok) {
                    setProduct({name:"-"});
                    return;
                }
                const product = await result.json();
                setProduct(product);
            }
            load();
        }, [token, productId])

    return <ProtectedPage>
        <p>
            <div>{product.name}</div>
            <img style = {{height: "100px"}} src = {product.picture}></img><br/>

            <Link to = "/">Back</Link>
        </p>
    </ProtectedPage>

}