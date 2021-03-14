import { TIME_OPTIONS } from './task.constants';
import { TimeStamp } from './task.types';

export const fromatToTimeString = (date?: Date): string | undefined =>
    date && new Date(date).toLocaleString(undefined, TIME_OPTIONS);

const getTimeDiffernce = (startDate: Date, endDate: Date): number =>
    Math.ceil((((new Date(endDate) as unknown) as number) - ((new Date(startDate) as unknown) as number)) / 1000 / 60);

export const getTaskDuration = (timeStamps: TimeStamp[]): number =>
    timeStamps.reduce(
        (summaryTime, { startDate, pauseDate }) =>
            startDate && pauseDate ? summaryTime + getTimeDiffernce(startDate, pauseDate) : summaryTime,
        0,
    );
