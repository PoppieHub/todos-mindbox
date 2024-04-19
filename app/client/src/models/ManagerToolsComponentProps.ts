import {ManagerToolsProps, TaskFilter} from "./index";

export default interface ManagerToolsComponentProps extends ManagerToolsProps{
    infoCountTask: string;
    activeButton: TaskFilter;
    setActiveButton: (filter: TaskFilter) => void;
}