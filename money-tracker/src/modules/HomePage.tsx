import { Container, Navbar, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faArrowRight, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { TransactionView } from "./TransactionView"

export const HomePage = () => {


    return <>
    <div style = {{width: "70%", marginLeft: "15%"}}>
      <Navbar style = {{width: "70%", marginLeft: "15%"}} bg = "#F0F0F0" fixed = "top">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style = {{marginTop: "100px"}}>
      <div className = "menu">
        <h1>RON</h1>
        <Button variant = "primary"><FontAwesomeIcon icon={faPlus}/>&nbsp;&nbsp;Add money</Button>
        <Button variant = "primary"><FontAwesomeIcon icon={faArrowRight}/>&nbsp;&nbsp;Send</Button>
        <Button variant = "primary"><FontAwesomeIcon icon={faEllipsis}/></Button>
        <h2>Transactions</h2>

    
      </div>
      
      </Container>
      
        {/* <Link to = {'/money'}>Expenses..</Link><br/>
        <Link to = {'/add'}>Income</Link><br/>
        */}
  </div>
    </>
}