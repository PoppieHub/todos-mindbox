import React from 'react';
import {TaskListProps} from "../../models";
import {InputTask} from "../../containers";

const TaskList: React.FC<TaskListProps> = (props) => {
    return (
        <div className="container__TaskList">
            {props.collectionTask.map(item =>
                   <InputTask key = {item.id} task={item} onClickTask={props.onClickTask} />
            )}
        </div>
    );
};

export default TaskList;