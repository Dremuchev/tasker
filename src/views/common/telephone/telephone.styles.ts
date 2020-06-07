import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Orange } from "../../../constants";

export const TypographyWrapper = styled<any>(Typography)<{ noIndent: boolean; color: string }>`
    color: ${({ color }) => Boolean(color) ?  color : Orange[600]};
    text-decoration: none;
    padding-right: ${({ noIndent }) => Boolean(noIndent) ?  '0' : '12px'};
`;