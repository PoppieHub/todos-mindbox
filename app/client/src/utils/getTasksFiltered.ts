import {TaskProps, TaskFilter} from "../models";

const getTasksFiltered = (filter: string, collection: TaskProps[]): TaskProps[] => {
    if (filter === TaskFilter.Active) {
        return collection.filter(item => !item.isCompleted);
    }
    if (filter === TaskFilter.Completed) {
        return collection.filter(item => item.isCompleted);
    }

    // Для значений 'All' или любых других неожиданных значений filter
    return collection;
}

export default getTasksFiltered;