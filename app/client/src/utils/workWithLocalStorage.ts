import {TaskProps} from "../models";

export const getCollectionTasks = ():TaskProps[] => {
    const tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
        return JSON.parse(tasks);
    }

    return [];
}

export const setCollectionTasks = (tasks: TaskProps[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}