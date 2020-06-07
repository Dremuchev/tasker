import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const BadgeWrapper = styled(Paper)`
    padding: 5px 10px;
    && {
        background-color: #262626;
    }
`;

export const BadgeContentTextWrapper = styled(Typography)`
    color: #fafafa;
`;

export const BadgeIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

export const BadgeTelephoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const WatsappIconWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
