import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';
import { GenerateRandomColor } from '../../helpers/RandomColor';

export const StatsSection = styled.section`
    outline: 1px solid ${theme.colors.whiteGray};
    padding: ${theme.spacing(2)};
    width: 300px;
    height: 100px;
    margin: 0 0 25px 0;
`;

export const Title = styled.h2`
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 25px 0;
`;

export const StatsContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  background-color: ${GenerateRandomColor()};
`;