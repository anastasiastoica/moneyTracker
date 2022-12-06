import { useTokenState } from "./TokenContext";


export const LogoutButton = () => {
    const {setToken} = useTokenState();
    const handleLogout = async () => {
        setToken("");
    }

    return <>
        <button onClick={handleLogout}>Logout</button>
    </>
}