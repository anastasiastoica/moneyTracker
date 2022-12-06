import { faArrowRight, faBars, faCalendar, faEllipsis, faNoteSticky, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { post, useAsyncState } from '../api/Backend';
import { TransactionType } from '../api/Models';
import { Transaction } from './HomePage';
import { useTokenState } from './TokenContext';



function IncomeView(props: {
  onSave: (t: Transaction) => void,
  onHide: () => void,
  className: string,
  show: boolean
}) {

  const [transactionTypes, reload] = useAsyncState<TransactionType[]>("transaction_type", []);
  const [selectedTransactionTypeId, setSelectedTransactionTypeId] = useState(-1);
  // const [wallet, reload] = useAsyncState

  const [sum, setSum] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const transactionListView = transactionTypes.map(transactionType => {
    let clazz ='transaction-type-button';
    if (transactionType.id === selectedTransactionTypeId) {
      clazz = "selected-transaction-type-button";
    }

  return <div key = {transactionType.id} className='category-button'>
    <Button className={clazz} variant = "primary" onClick={() => setSelectedTransactionTypeId(transactionType.id!)}><img className='small-icon' src={transactionType.icon}/></Button>
  </div>

  // const walletView = 
  return <div>
    <Button></Button>
  </div>
  
})

    return (
      <Modal className='modal'
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <div className='model-header'>
        <Modal.Header closeButton onClick={props.onHide}> 
          <Modal.Title id="contained-modal-title-vcenter">
            Add income
          </Modal.Title>
        </Modal.Header>
      </div>
      <div className='model-body'>
        <Modal.Body>
          <h5 className='sum'><input id='sum' value={sum} onChange={e =>setSum(e.target.value)} type="number" placeholder='Add the amount'/></h5>
          <h5><FontAwesomeIcon icon={faWallet}/>&nbsp;&nbsp;&nbsp;Wallet</h5>
          <h5><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;&nbsp;&nbsp;<input value={date} onChange={e => setDate(e.target.value)} id="calendar" type="date" /></h5>
          <h5><FontAwesomeIcon icon={faNoteSticky}/>&nbsp;&nbsp;&nbsp;&nbsp;<input value={note} onChange={e =>setNote(e.target.value)} id= "note" className="w3-input-w3-animate-input" type="text" placeholder = "Write a note" style={{width:"135px"}}/></h5>
          <h5><FontAwesomeIcon icon={faBars}/>&nbsp;&nbsp;&nbsp;&nbsp;Select a category</h5>
        
          {transactionListView}
      
        </Modal.Body>
      </div>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={() => {props.onSave({sum: parseFloat(sum), date:date, note:note, category: selectedTransactionTypeId});
        setNote(""); setSum("")}}>Save</Button>
        </Modal.Footer>
      </Modal>

      
    );
    
  }
  export default IncomeView;
