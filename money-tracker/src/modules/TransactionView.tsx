import { faArrowRight, faBars, faCalendar, faEllipsis, faNoteSticky, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TransactionType } from "../api/Models";
import { Transaction } from "./HomePage";

export const TransactionView = (props: { transaction: Transaction, transactionType?: TransactionType }) => {
    const { id, sum, date, note, category } = props.transaction;
    const transactionType = props.transactionType;

    return <p className="transaction-view">
        {/* <span className="id-style">{id}</span><br/> */}
        <img className='small-icon' src={transactionType?.icon} alt="" />
        <span className="category-style">{transactionType?.name}</span>
        <span className="date-style">{new Date(date!!).toLocaleDateString('ro-ro', {year:"numeric", month:"short", day:"numeric"})}</span>
        {/* <h5><FontAwesomeIcon icon={transa}/>&nbsp;&nbsp;&nbsp;&nbsp;</h5>
         */}
         
        <span className="note-style">{note}</span>
        <span className="sum-style"> +{sum} RON</span>
        
    </p>
} 