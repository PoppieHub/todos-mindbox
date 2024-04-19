import React from 'react';
import {InputTodoProps} from "../../models";
import "./index.css";

const InputTodo: React.FC<InputTodoProps> = (props) => {
    return (
        <div className="container__inputField">
            <input
                type="text"
                value={props.typeInput}
                placeholder="What needs to be done?"
                onChange={e => props.setTypeInput(e.target.value)}
                onKeyDown={e  => props.onDownEnterHandler(e)}
            />
        </div>
    );
}

export default InputTodo;