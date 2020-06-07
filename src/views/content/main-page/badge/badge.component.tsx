import { Button } from '@material-ui/core';
import React from 'react';
import { ConsultantTelephone } from '../../../common/telephone/conultant-telephone.component';
import { MemorializeTelephone } from '../../../common/telephone/memorialize-telephone.component';
import { contentText } from './badge.constants';
import { BadgeContentTextWrapper, BadgeIconWrapper, BadgeTelephoneWrapper, BadgeWrapper, ButtonWrapper, WatsappIconWrapper } from './badge.styles';

export const Badge = () => {
    return (
        <BadgeWrapper elevation={1}>
            <BadgeIconWrapper>
                <img src="https://opel-center.ru/images/opel/opel2.png" height="100px"/>
            </BadgeIconWrapper>
            <BadgeContentTextWrapper>{contentText}</BadgeContentTextWrapper>
            <ButtonWrapper>
                <Button color="secondary" href="#outlined-buttons">
                    Калькулятор ТО
                </Button>
            </ButtonWrapper>
            <BadgeTelephoneWrapper>
                <BadgeContentTextWrapper>Запись на сервис, расчет стоимости работ:</BadgeContentTextWrapper>
                <MemorializeTelephone noIndent color="#ffc069" />
                <BadgeContentTextWrapper>Консультация технического специалиста:</BadgeContentTextWrapper>
                <ConsultantTelephone noIndent color="#ffc069" />
            </BadgeTelephoneWrapper>
            <ButtonWrapper>
                <Button color="secondary" href="#outlined-buttons">
                    Написать нам
                </Button>
            </ButtonWrapper>
            <WatsappIconWrapper>
                <a href="https://api.whatsapp.com/send?phone=79151229306" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#a0d911" viewBox="0 0 24 24" width="48px" height="48px">
                        <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"/>
                    </svg>
                </a>
            </WatsappIconWrapper>
        </BadgeWrapper>
    );
};