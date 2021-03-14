import { Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { memo, useCallback, useState } from 'react';
import { EmptyImage } from '../../illustrations/empty';
import { Task } from '../task/task.component';
import { TaskEntity } from '../task/task.types';
import { taskManager } from './task-manager.helpers';
import { EmptyImageWrapper } from './task-manager.styles';

export const TaskManager = memo(() => {
    const [tasks, setTasks] = useState(taskManager.getTasks());
    const taskKeys = Object.keys(tasks);

    const addTask = useCallback(() => {
        taskManager.addTask();
        setTasks(taskManager.getTasks());
    }, []);

    const removeTask = useCallback((id: string) => {
        taskManager.removeTask(id);
        setTasks(taskManager.getTasks());
    }, []);

    const updateTask = useCallback((taskData: TaskEntity, isCurrent?: boolean) => {
        if (isCurrent) {
            taskManager.switchActiveTask(taskData);
            setTasks(taskManager.getTasks());
        } else {
            taskManager.updateTask(taskData);
            setTasks(taskManager.getTasks());
        }
    }, []);

    return (
        <div>
            <Button color="primary" onClick={addTask} disableRipple fullWidth>
                New task
            </Button>
            {taskKeys.length ? (
                <Grid container spacing={1} alignItems="stretch">
                    {taskKeys.map(id => (
                        <Grid key={id} item xs={3}>
                            <Task taskData={tasks[id]} onDelete={removeTask} onUpdate={updateTask} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <EmptyImageWrapper>
                    <EmptyImage />
                    <Typography>No tasks available</Typography>
                </EmptyImageWrapper>
            )}
        </div>
    );
});
