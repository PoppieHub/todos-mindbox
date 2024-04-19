import React, {useEffect, useState} from "react";
import {ButtonProps} from "../models";
import {Button as ButtonComponent} from "../components";

const Button: React.FC<ButtonProps> = (props) => {
    const [classNameButton, setClassNameButton] = useState('');

    useEffect(() => {
        if (props.className!) {
            if (props.filtered! === props.activeButton!) {
                setClassNameButton(
                    props.className + ` ${props.className}_active`
                );
            } else {
                setClassNameButton(
                    props.className
                );
            }
        }
    }, [props.activeButton, props.className, props.filtered]);

    return (
        <ButtonComponent
            className={classNameButton}
            name={props.name}
            onClickHandler={props.onClickHandler}
            filtered={props.filtered}
            setActiveButton={props.setActiveButton}
        />
    );
};

export default Button;