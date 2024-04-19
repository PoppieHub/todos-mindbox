import {TaskFilter} from "./TaskFilter";

export type ButtonProps = {
    name: string;
    filtered?: TaskFilter;
    activeButton?: TaskFilter;
    setActiveButton?: (param: string) => void;
    className?: string;
    onClickHandler: () => void;
}