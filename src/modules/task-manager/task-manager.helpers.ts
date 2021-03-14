import { v4 as uuidv4 } from 'uuid';
import { TaskEntity } from '../task/task.types';

enum TaskManagerKeys {
    TASKS = 'tasks',
    TASKS_NUMBER = 'tasksNumber',
    CURRENT_TASK = 'currentTask',
}

export const taskManager = {
    getTasks: (): Record<string, TaskEntity> | object => {
        const tasksRoot = localStorage.getItem(TaskManagerKeys.TASKS);

        if (tasksRoot) {
            return JSON.parse(tasksRoot);
        }

        return {};
    },
    addTask: (): string => {
        const taskId = uuidv4();
        const taskNumber = localStorage.getItem(TaskManagerKeys.TASKS_NUMBER) || '1';
        const newTask = {
            id: taskId,
            title: `Task ${taskNumber}`,
            isActive: false,
            timeStamps: [],
        };
        const allTasks = taskManager.getTasks();
        allTasks[taskId] = newTask;

        localStorage.setItem(TaskManagerKeys.TASKS, JSON.stringify(allTasks));
        localStorage.setItem(TaskManagerKeys.TASKS_NUMBER, String(Number(taskNumber) + 1));

        return taskId;
    },
    getCurrentTask: (): TaskEntity | undefined => {
        const currentTask = localStorage.getItem(TaskManagerKeys.CURRENT_TASK);

        if (currentTask) {
            return JSON.parse(currentTask);
        }

        return undefined;
    },
    getTaskById: (id: string): TaskEntity | undefined => {
        const allTasks = taskManager.getTasks();

        return allTasks[id];
    },
    updateTask: (data: TaskEntity): void => {
        const allTasks = taskManager.getTasks();
        allTasks[data.id] = data;

        if (data.isActive) {
            localStorage.setItem(TaskManagerKeys.CURRENT_TASK, JSON.stringify(data));
        }

        localStorage.setItem(TaskManagerKeys.TASKS, JSON.stringify(allTasks));
    },
    removeTask: (id: string) => {
        const allTasks = taskManager.getTasks();

        if (allTasks[id]?.isActive) {
            localStorage.removeItem(TaskManagerKeys.CURRENT_TASK);
        }

        delete allTasks[id];

        localStorage.setItem(TaskManagerKeys.TASKS, JSON.stringify(allTasks));
    },
    switchActiveTask: (activeTask: TaskEntity) => {
        const currentDate = new Date();
        const currentActiveTask = taskManager.getCurrentTask();

        if (currentActiveTask) {
            const lastStamp = currentActiveTask.timeStamps[currentActiveTask.timeStamps.length - 1];

            if (!lastStamp.pauseDate) {
                const currentActiveTaskStamp = currentActiveTask.timeStamps.pop();

                if (currentActiveTaskStamp) {
                    currentActiveTaskStamp.pauseDate = currentDate;
                    currentActiveTask.timeStamps.push(currentActiveTaskStamp);
                }
            } else {
                currentActiveTask.timeStamps.push({ startDate: currentDate });
            }

            taskManager.updateTask({ ...currentActiveTask, isActive: false });
        }

        const nextActiveTask = { ...activeTask, isActive: true };

        if (nextActiveTask.startDate) {
            const lastStamp = nextActiveTask.timeStamps[nextActiveTask.timeStamps.length - 1];

            if (!lastStamp.pauseDate) {
                const currentActiveTaskStamp = nextActiveTask.timeStamps.pop();

                if (currentActiveTaskStamp) {
                    currentActiveTaskStamp.pauseDate = currentDate;
                    nextActiveTask.timeStamps.push(currentActiveTaskStamp);
                }
            }
        } else {
            nextActiveTask.startDate = currentDate;
        }

        nextActiveTask.timeStamps.push({ startDate: currentDate });

        taskManager.updateTask(nextActiveTask);
    },
    switchActiveTaskStamps: (activeTask: TaskEntity) => {
        const currentActiveTask = taskManager.getCurrentTask();

        if (currentActiveTask) {
            taskManager.updateTask({ ...currentActiveTask, isActive: false });
        }

        const nextActiveTask = { ...activeTask, isActive: true };

        taskManager.updateTask(nextActiveTask);
    },
};
