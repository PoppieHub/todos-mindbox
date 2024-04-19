import React from "react";

export default interface InputTodoProps {
    typeInput: string;
    setTypeInput: (value: string) => void;
    onDownEnterHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}