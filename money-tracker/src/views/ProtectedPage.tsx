import { LoginPage } from "./LoginPage";
import { useTokenState } from "./TokenContext"

export const ProtectedPage = (props: any) => {
    const {token} = useTokenState();
    const view = token === "" ? <LoginPage/>: props.children;
    return<>
        {view}
    </>
}