import React from 'react';
import {InputTaskComponentProps} from "../../models";

const InputTask: React.FC<InputTaskComponentProps> = (props) => {
    return (
        <div className="container__task">
            <input
                type="checkbox"
                id = {`task: ${props.task.id}`}
                onChange={e => props.setFlag(e.target.checked)}
                checked={props.flag}
            />
            <label htmlFor={`task: ${props.task.id}`}>{props.task.name}</label>
        </div>
        );
};

export default InputTask;