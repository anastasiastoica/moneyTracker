interface Transaction {
    id?: string;
    description?: string;
    date?: string;
    amount?: string;
}
export const TransactionView = (props: { transaction: Transaction }) => {
    const { id, description, date, amount } = props.transaction;
    return <p className="transaction-view">
        <span>{description}</span><br/>
        <span>{date}</span>
        <span>{amount}</span>
    </p>
}