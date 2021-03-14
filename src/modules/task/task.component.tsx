import { CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import HighlightOff from '@material-ui/icons/HighlightOff';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import React, { ChangeEvent, memo, useCallback, useState } from 'react';
import { INPUT_ATTRIBUTES } from './task.constants';
import { fromatToTimeString, getTaskDuration } from './task.helpers';
import { Actions, Content, TaskWrapper } from './task.styles';
import { TaskProps } from './task.types';

export const Task = memo(({ taskData, onDelete, onUpdate }: TaskProps) => {
    const [title, setTitle] = useState(taskData.title);

    const handleTitleChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setTitle(value);
    }, []);

    const handleTitleBlur = useCallback(() => {
        if (title !== taskData.title) {
            onUpdate({ ...taskData, title });
        }
    }, [title, taskData, onUpdate]);

    const handleDelete = useCallback(() => onDelete(taskData.id), [onDelete]);

    const handleStartTask = useCallback(() => {
        onUpdate(taskData, true);
    }, [taskData, onUpdate]);

    return (
        <TaskWrapper>
            <Content isActive={taskData.isActive}>
                <CardHeader
                    title={
                        <Tooltip title={<Typography align="center">{title}</Typography>}>
                            <TextField
                                id="standard-basic"
                                label="Title"
                                value={title}
                                onChange={handleTitleChange}
                                onBlur={handleTitleBlur}
                                inputProps={INPUT_ATTRIBUTES}
                                fullWidth
                            />
                        </Tooltip>
                    }
                />
                <CardContent>
                    {taskData.startDate && (
                        <Typography>{`Started at: ${fromatToTimeString(taskData.startDate)}`}</Typography>
                    )}
                    {taskData.timeStamps.map(
                        ({ startDate, pauseDate }, index) =>
                            startDate &&
                            pauseDate && (
                                <Typography key={index}>{`${index + 1} turn: ${fromatToTimeString(
                                    startDate,
                                )} -> ${fromatToTimeString(pauseDate)}`}</Typography>
                            ),
                    )}
                    <Typography>{`Summary time: ${getTaskDuration(taskData.timeStamps)} minutes`}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Actions>
                        <Tooltip
                            title={taskData.isActive ? 'Task is in progress' : 'Start task'}
                            onClick={handleStartTask}
                        >
                            <span>
                                <IconButton disableRipple color="primary" disabled={taskData.isActive}>
                                    <PlayCircleOutline />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title="Delete task">
                            <IconButton disableRipple color="secondary" onClick={handleDelete}>
                                <HighlightOff />
                            </IconButton>
                        </Tooltip>
                    </Actions>
                </CardActions>
            </Content>
        </TaskWrapper>
    );
});
