import { Table, TableTitle, Thead } from "./TransactionHistory.styled";
import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = (props) => {
    return(
        <Table>
            <Thead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </Thead> 
            <tbody>
                {props.items.map(trItem => (
                    <TransactionItem key={trItem.id} trItem={trItem}/>
                ))}
            </tbody>
        </Table>
    );
}
