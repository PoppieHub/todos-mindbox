import React, {useState} from 'react';
import {getCollectionTasks, getTasksFiltered, setCollectionTasks} from "../utils";
import {Todos as TodosPages} from "../pages";

const Todos: React.FC = () => {
    const tasks = getCollectionTasks();
    const [collectionFiltered, setCollectionFiltered] = useState(tasks);
    const [typeInput, setTypeInput] = useState('');
    const [onClickTask, setOnClickTask] = useState(tasks.filter(
        task => !task.isCompleted
    ));

    const onDownEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;

            tasks.push({
                id: Date.now(),
                isCompleted: false,
                name: target.value
            });

            setCollectionTasks(tasks);
            setCollectionFiltered(tasks);
            setOnClickTask(
                tasks.filter(task => !task.isCompleted)
            );
            setTypeInput('');
        }
    };

    const clearCompletedTaskHandler = (): void => {
        setCollectionTasks(onClickTask);
        setCollectionFiltered(onClickTask);
    };

    const selectFilteredHandler = (param: string): void => {
        setCollectionFiltered(
            getTasksFiltered(param, getCollectionTasks())
        );
    }

    return (
        <TodosPages
            typeInput={typeInput}
            setTypeInput={setTypeInput}
            onDownEnterHandler={onDownEnterHandler}
            collectionTask={collectionFiltered}
            onClickTask={setOnClickTask}
            tasks={onClickTask}
            clearCompletedTaskHandler={clearCompletedTaskHandler}
            selectFilteredHandler={selectFilteredHandler}
        />
    );
}

export default Todos;
