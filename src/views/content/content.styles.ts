import styled from 'styled-components';
import { CONFIG } from '../../configuration';

export const StyledMain = styled.main<{ isMobile: boolean }>`
    padding-top: ${({ isMobile }) => (isMobile ? CONFIG.MAIN_PADDING_TOP_MOBILE : CONFIG.MAIN_PADDING_TOP)}px;
`;
