import React, { useEffect, useState } from 'react';
import { InputTaskProps, TaskProps } from '../models';
import { getCollectionTasks, setCollectionTasks } from '../utils';
import { InputTask as InputTaskComponent } from '../components';

const InputTask: React.FC<InputTaskProps> = ({ task, onClickTask }) => {
    const [flag, setFlag] = useState(task.isCompleted);

    useEffect(() => {
        const updateTaskInCollection = (updatedTask: TaskProps) => {
            const updatedTasks = getCollectionTasks().map(t => (t.id === updatedTask.id ? updatedTask : t));
            setCollectionTasks(updatedTasks);
        };

        const updatedTask = { ...task, isCompleted: flag };
        updateTaskInCollection(updatedTask);

        // Вызываем onClickTask с отфильтрованными задачами (невыполненными)
        const filteredTasks = getCollectionTasks().filter(t => !t.isCompleted);
        onClickTask(filteredTasks);
    }, [flag, task, onClickTask]);

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
