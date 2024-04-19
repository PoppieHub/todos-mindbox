import React, {useEffect, useState} from 'react';
import {ManagerToolsProps, TaskFilter} from "../models";
import {getSelectionTasks} from "../utils";
import {ManagerTools as ManagerToolsComponent} from "../components";

const ManagerTools: React.FC<ManagerToolsProps> = (props) => {
    const [infoCountTask, setInfoCountTask] = useState('');
    const [activeButton, setActiveButton] = useState(TaskFilter.All);

    useEffect(() => {
        setInfoCountTask(getSelectionTasks(props.tasks));
    }, [props.tasks]);

    return (
        <ManagerToolsComponent
            tasks={props.tasks}
            clearCompletedTaskHandler={props.clearCompletedTaskHandler}
            selectFilteredHandler={props.selectFilteredHandler}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            infoCountTask={infoCountTask}
        />
    );
}

export default ManagerTools;