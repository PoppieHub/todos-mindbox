import React from 'react';
import {ManagerToolsComponentProps, TaskFilter} from "../../models";
import {Button} from "../../containers";
import "./index.css";

const ManagerTools: React.FC<ManagerToolsComponentProps> = (props) => {

    return (
        <div className="container__managerTools">
            <span className="container__infoCountTask">{props.infoCountTask}</span>
            <div className="container__listFilters">
                <Button
                    key = {TaskFilter.All}
                    name = {TaskFilter.All}
                    filtered = {TaskFilter.All}
                    className={'container__filterButton'}
                    activeButton = {props.activeButton}
                    setActiveButton = {() => props.setActiveButton(TaskFilter.All)}
                    onClickHandler = {() => props.selectFilteredHandler(TaskFilter.All)}
                />
                <Button
                    key = {TaskFilter.Active}
                    name = {TaskFilter.Active}
                    filtered = {TaskFilter.Active}
                    className={'container__filterButton'}
                    activeButton = {props.activeButton}
                    setActiveButton = {() => props.setActiveButton(TaskFilter.Active)}
                    onClickHandler = {() => props.selectFilteredHandler(TaskFilter.Active)}
                />
                <Button
                    key = {TaskFilter.Completed}
                    name = {TaskFilter.Completed}
                    filtered = {TaskFilter.Completed}
                    className={'container__filterButton'}
                    activeButton = {props.activeButton}
                    setActiveButton = {() => props.setActiveButton(TaskFilter.Completed)}
                    onClickHandler = {() => props.selectFilteredHandler(TaskFilter.Completed)}
                />
            </div>
            <Button name={'Clear completed'} onClickHandler={props.clearCompletedTaskHandler} />
        </div>
    );
}

export default ManagerTools;