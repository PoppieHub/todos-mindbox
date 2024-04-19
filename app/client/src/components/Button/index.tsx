import React from "react";
import {ButtonProps} from "../../models";

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={props.className!}
            onClick={() => {
                props.onClickHandler();
                (props.filtered && props.setActiveButton) && props.setActiveButton(props.filtered);
            }}>
            {props.name}
        </button>
    );
};

export default Button;