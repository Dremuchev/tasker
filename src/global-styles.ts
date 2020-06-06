import { createGlobalStyle } from 'styled-components';
import { APP_BG_COLOR } from './constants';

export const GlobalStyles = createGlobalStyle`
    body {
        position: relative;
        min-height: 100%;
        font-weight: 400;
        padding: 0;
        color: #333;
        height: initial;
        background-color: ${APP_BG_COLOR};
        margin: 0;
    }
    
    a {
        text-decoration: none;
    }
`;
