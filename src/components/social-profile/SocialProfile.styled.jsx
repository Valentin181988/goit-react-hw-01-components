import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const Card = styled.div`
   border-radius: 2px;
   /* padding: ${theme.spacing(2)}; */
   outline: 1px solid ${theme.colors.whiteGray};
   width: 210px;
   height: 260px;
   margin: 0 0 25px 0;
`;


export const Wrapper = styled.div`
    text-align: center;
`;

export const UserImg = styled.img`
    src: ${props => props.src};
    alt: "User avatar";
    width: 85px;
    margin: 10px 0 0 0;
`;

export const InfoName = styled.p`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin: 10px 0 10px 0;
`;

export const Info = styled.p`
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${theme.colors.grey};
    margin: 0;
`;

export const StatsList = styled.ul`
    display: flex;
    margin: 15px 0 0 0;
    padding: 0;
    width: 210px;
    height: 55px;
    background-color: ${theme.colors.whiteGray};
    
`;

export const StatsItem = styled.li`
    list-style-type: none;
    width: 70px;
    text-align: center;
    padding: ${theme.spacing(1)};
    
`;

export const StatsInfo = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
`;

export const StatsInfoValue = styled.span`
    display: inline-block;
    font-weight: 500;
`;