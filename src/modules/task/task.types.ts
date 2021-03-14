export interface TaskEntity {
    id: string;
    title: string;
    isActive: boolean;
    timeStamps: TimeStamp[];
    startDate?: Date;
}

export interface TimeStamp {
    startDate?: Date;
    pauseDate?: Date;
}

export interface TaskProps {
    taskData: TaskEntity;

    onDelete(id: string): void;
    onUpdate(data: TaskEntity, isActiveTask?: boolean): void;
}
export interface DateTimeFormatOptions {
    localeMatcher?: 'lookup' | 'best fit';
    weekday?: 'long' | 'short' | 'narrow';
    era?: 'long' | 'short' | 'narrow';
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
    hour?: 'numeric' | '2-digit';
    minute?: 'numeric' | '2-digit';
    second?: 'numeric' | '2-digit';
    timeZoneName?: 'long' | 'short';
    formatMatcher?: 'basic' | 'best fit';
    hour12?: boolean;
}
