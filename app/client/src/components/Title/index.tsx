import React from 'react';
import {TitleProps} from "../../models";

const Title: React.FC<TitleProps> = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}

export default Title;