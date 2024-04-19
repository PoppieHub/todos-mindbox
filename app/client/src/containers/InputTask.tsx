import React, {useEffect, useState} from 'react';
import {InputTaskProps, TaskProps} from "../models";
import {getCollectionTasks, setCollectionTasks} from "../utils";
import {InputTask as InputTaskComponent} from "../components";

const InputTask: React.FC<InputTaskProps> = (props) => {
    const [flag, setFlag] = useState(props.task.isCompleted);
    const [inputTask, setInputTask] = useState(props.task);
    const tasks: TaskProps[] = getCollectionTasks() ?? [];

    useEffect(() => {
        setInputTask({
            ...inputTask,
            ...props.task
        });
    }, [props.task]);

    useEffect(() => {
        tasks.forEach(task => {
            if (task.id === props.task.id) task.isCompleted = flag;
            setCollectionTasks(tasks);
        });

        props.onClickTask(
            tasks.filter(inputTask => !inputTask.isCompleted)
        );
    }, [flag]);

    return (
        <InputTaskComponent
            task={props.task}
            onClickTask={props.onClickTask}
            flag={flag}
            setFlag={setFlag}
        />
    );
};

export default InputTask;