import { DateTimeFormatOptions } from './task.types';

export const INPUT_ATTRIBUTES = { maxLength: 128 };

export const TIME_OPTIONS: DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
};
