import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const TaskWrapper = styled(Card)`
    height: 100%;
`;

export const Content = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    ${({ isActive }) => isActive && 'background-color: rgba(48, 182, 221, 0.2);'};
`;

export const Actions = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
