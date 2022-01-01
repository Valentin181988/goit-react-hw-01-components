import { Table, TableTitle } from "./TransactionHistory.styled";
import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = (props) => {
    return(
        <Table>
            <thead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </thead> 
            <tbody>
                {props.items.map(trItem => (
                    <TransactionItem key={trItem.id} trItem={trItem}/>
                ))}
            </tbody>
        </Table>
    );
}
