import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const Table = styled.table`
   text-align: center;
   border: 4px double ${theme.colors.whiteGray};
   border-collapse: collapse;
   min-width: 400px; 
   border-spacing: 5px 9px;
`;

export const Thead = styled.thead`
   background-color: #afe2e6;
`;

export const TableTitle = styled.th`
   text-transform: uppercase;
   padding: 10px;
`;