import { TypographyWrapper } from "./telephone.styles";
import React, { memo } from "react";
import { TelephoneProps } from "./telephone.types";

export const MemorializeTelephone = memo(({ noIndent, color }: TelephoneProps) => (
    <TypographyWrapper variant="subtitle2" component="a" href="tel: +74952564787" noIndent color={color}>
        +7 (495) 256-47-87
    </TypographyWrapper>
));
