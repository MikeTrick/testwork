import React, {LegacyRef, MutableRefObject, useEffect, useRef} from "react";
import {useToDoContext} from "../context/context";
import {ITask} from "../types";

export const Card: React.FC<ITask> = ({title, isCompleted, id}) => {
    const {deleteTask, setIsChecked} = useToDoContext()
    const changeHandler = (cb: (id: string) => void) => () => {
        cb(id)
    }// Заменить на ClassNames
    const getClassName = () => {
        const baseName = 'todo-list__content'
        return isCompleted ? baseName + ' ' + baseName + '_crossed' : baseName
    }


    const ref: MutableRefObject<HTMLInputElement | undefined> = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.checked = isCompleted
        }
    }, [isCompleted])

    return (
        <div className='todo-list__card card'>
            <input ref={ref as LegacyRef<HTMLInputElement>} type='checkbox' className='card__checkbox'
                   value={'${isCompleted}' as string} onClick={changeHandler(setIsChecked)} />
            <div className={getClassName()}>{title}</div>
            <button type="button" className='card__button'
                    onClick={changeHandler(deleteTask)}><img src={'./mark-group.png'} alt='' />
            </button>
        </div>)
}
