import React, { useEffect, useState } from 'react';
import { InputTaskProps, TaskProps } from '../models';
import { getCollectionTasks, setCollectionTasks } from '../utils';
import { InputTask as InputTaskComponent } from '../components';

const InputTask: React.FC<InputTaskProps> = ({ task, onClickTask }) => {
    const [flag, setFlag] = useState(task.isCompleted);
    const [tasks, setTasks] = useState<TaskProps[]>(getCollectionTasks() ?? []);

    useEffect(() => {
        const updatedTasks = tasks.map(t => (t.id === task.id ? { ...t, isCompleted: flag } : t));
        // Проверяем, изменились ли задачи, прежде чем обновлять состояние
        if (!tasksAreEqual(updatedTasks, tasks)) {
            setTasks(updatedTasks);
        }
    }, [flag, task, tasks]);

    useEffect(() => {
        const filteredTasks = tasks.filter(t => !t.isCompleted);
        onClickTask(filteredTasks);
        // Вызываем setCollectionTasks с актуальным значением tasks
        setCollectionTasks(tasks);
    }, [tasks, onClickTask]);

    // Функция для проверки равенства массивов задач
    const tasksAreEqual = (tasks1: TaskProps[], tasks2: TaskProps[]): boolean => {
        if (tasks1.length !== tasks2.length) {
            return false;
        }
        for (let i = 0; i < tasks1.length; i++) {
            if (tasks1[i].id !== tasks2[i].id || tasks1[i].isCompleted !== tasks2[i].isCompleted) {
                return false;
            }
        }
        return true;
    };

    return (
        <InputTaskComponent
            task={task}
            onClickTask={onClickTask}
            flag={flag}
            setFlag={setFlag}
        />
    );
};

export default InputTask;
