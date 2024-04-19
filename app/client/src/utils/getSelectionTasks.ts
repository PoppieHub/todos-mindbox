import {TaskProps} from "../models";

const getSelectionTasks = (tasks: TaskProps[]): string => {
    let substitution: string = 'items';

    if (tasks.length <= 0) {
        return '0 items left';
    }

    if (tasks.length === 1) {
        substitution = 'item';
    }

    return `${tasks.length} ${substitution} left`;
}

export default getSelectionTasks;