import styled from '@emotion/styled'

export const Card = styled.div`
   position: relative;
   border-radius: 4px;
`;

export const Wrapper = styled.div`
    padding: 8px;
`;

export const UserImg = styled.img`
    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    alt="User avatar"
    class="avatar"
`;

export const Info = styled.p`
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const StatsList = styled.ul`
    padding: 4px;
`;

export const StatsItem = styled.li`
    list-style-type: none;
`;

export const StatsInfo = styled.span`
    color: 'red'
`;