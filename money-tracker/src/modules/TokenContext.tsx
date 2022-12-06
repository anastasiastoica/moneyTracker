import { createContext, useContext, useState } from "react";

export interface TokenState {
    token: string;
    setToken: (token: string) => void
}

export const TokenContext = createContext<TokenState>({} as any);
export const useTokenState = () => useContext(TokenContext);

export const TokenProvider = (props: any) => {
    const [token, setToken] = useState("=r6WdV7U");
    
    const tokenState  = {
        token,
        setToken
    }
    return <TokenContext.Provider value={tokenState}>
        {props.children}
    </TokenContext.Provider>
}