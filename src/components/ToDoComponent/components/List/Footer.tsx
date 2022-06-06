import React, {useState} from 'react';
import {useToDoContext} from "../../context/context";
import {v4 as uuidv4} from 'uuid'
export const Footer:React.FC = () => {
    const {addTask} = useToDoContext()

    const [inputValue, setInputValue] = useState('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const submitHandler = () => {
        if (!inputValue) return
        addTask({
            title: inputValue,
            id: uuidv4(),
            isCompleted: false,
        })
        setInputValue('')
    }

    return (
        <div className="todo-list__footer">
            <input type='text' placeholder= 'Введите текст' value={inputValue} onChange={(e) => changeHandler(e)}/>
            <button type='button' onClick={submitHandler}><img src={'./addBtnGreen.png'} alt=''/></button>
        </div>)
}
