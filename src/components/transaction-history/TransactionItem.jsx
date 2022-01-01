import PropTypes from 'prop-types';
import { TableItem } from './TransactionItem.styled';

export const TransactionItem = ({trItem:{id, type, amount, currency}}) => {
    return(
        <tr>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
        </tr>
    );
}

TransactionItem.propTypes = {
    trItem: PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string, 
    })
}