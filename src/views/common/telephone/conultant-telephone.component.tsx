import { TypographyWrapper } from "./telephone.styles";
import React, { memo } from "react";
import { TelephoneProps } from "./telephone.types";

export const ConsultantTelephone = memo(({ noIndent, color }: TelephoneProps) => (
    <TypographyWrapper variant="subtitle2" component="a" href="tel: +79151229306" noIndent color={color}>
        +7 (915) 122-93-06
    </TypographyWrapper>
));
