import {TaskProps} from "./index";

export default interface ManagerToolsProps {
    tasks: TaskProps[];
    selectFilteredHandler: (param: string) => void;
    clearCompletedTaskHandler: () => void;
}