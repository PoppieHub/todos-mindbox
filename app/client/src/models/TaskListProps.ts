import {onClickTask, TaskProps} from "./index";

export default interface TaskListProps extends onClickTask {
    collectionTask: TaskProps[];
}