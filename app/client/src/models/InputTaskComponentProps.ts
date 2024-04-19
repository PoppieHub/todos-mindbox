import {InputTaskProps} from "./index";

export default interface InputTaskComponentProps extends InputTaskProps {
    flag: boolean;
    setFlag: (flag: boolean) => void;
}