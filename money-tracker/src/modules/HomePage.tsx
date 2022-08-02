import { Link } from "react-router-dom"

export const HomePage = () => {


    return <>
        <h1>Welcome</h1>
        <Link to = {'/money'}>Expenses</Link><br/>
        <Link to = {'/add'}>Income</Link><br/>

    </>
}