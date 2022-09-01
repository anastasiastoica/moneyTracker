import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export const HomePage = () => {


    return <>
    <div style = {{width: "50%", marginLeft: "25%"}}>
      <Navbar style = {{width: "50%", marginLeft: "25%"}} bg = "#F0F0F0" fixed = "top">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style = {{marginTop: "100px"}}>
      <div className = "menu">
        <h1>RON</h1>
        <button>Add money</button>
        <h2>Transactions</h2>
    
      </div>
      
      </Container>
      
        {/* <Link to = {'/money'}>Expenses..</Link><br/>
        <Link to = {'/add'}>Income</Link><br/>
        */}
  </div>
    </>
}