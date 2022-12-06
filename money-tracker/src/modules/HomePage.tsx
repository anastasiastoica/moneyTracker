import { Container, Navbar, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faArrowRight, faEllipsis, faAudioDescription} from '@fortawesome/free-solid-svg-icons'
import { TransactionView } from "./TransactionView"
import { idText } from "typescript"
import { ProtectedPage } from "./ProtectedPage"
import { LogoutButton } from "./LogoutButton"
import { useEffect, useState } from "react"
import { useTokenState } from "./TokenContext"

import Modal from 'react-bootstrap/Modal';
import IncomeView from "./IncomeView";
import { post, useAsyncState } from "../api/Backend"
import { TransactionType } from "../api/Models"
import ExpenseView from "./ExpenseView"

export interface Transaction {
  id?: number;
  sum?: number;
  date?: string;
  note?: string;
  category?: number;
}

export interface ExpenseTransaction {
  id?: number;
  sum?: number;
  date?: string;
  note?: string;
  category?: number;
}

export const HomePage = () => {
  const [transactions, reloadTransactions] = useAsyncState<Transaction[]>("transaction", []);
  const [transactionTypes, reload] = useAsyncState<TransactionType[]>("transaction_type", []);
  const [modalShow, setModalShow] = useState(false);


  const transactionList = transactions.map(transaction => {
    const transactionType = transactionTypes.find(it => it.id === transaction.category);
    return <TransactionView transaction={transaction} transactionType={transactionType} key = {transaction.id}/>

  })

  const onSave = (transaction: Transaction) => {
    post("transaction", "=r6WdV7U", transaction)
    setModalShow(false);
    reloadTransactions();
  }

  const onSaveExpense = (transaction: ExpenseTransaction) => {
    post("transaction", "=r6WdV7U", transaction)
    setModalShow(false);
    reloadTransactions();
  }

  return <ProtectedPage>
    <div style = {{width: "70%", marginLeft: "15%"}}>
      <Navbar style = {{width: "70%", marginLeft: "15%"}} bg = "#F0F0F0" fixed = "top">
        <Container className="navbar">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style = {{marginTop: "100px"}}>
      <div className = "menu">
        <h1>RON</h1>
        <Button variant="primary" onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faPlus}/>&nbsp;&nbsp;Add income</Button>
        <Button variant = "primary" onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faArrowRight}/>&nbsp;&nbsp;Add expense</Button>
        <Button variant = "primary"><FontAwesomeIcon icon={faEllipsis}/></Button>
        <h2>Transactions</h2>
    
        {transactionList}
        <IncomeView className = "income-view"
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSave = {onSave}
        />
        
        {/* <ExpenseView className = "expense-view"
        show = {modalShow}
        onHide={() => setModalShow(false)}
        onSave = {onSaveExpense}
        /> */}
        
      </div>
     
      </Container>
      
  </div>
  <LogoutButton/>
  </ProtectedPage>
}

