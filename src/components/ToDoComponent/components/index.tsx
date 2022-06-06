import React, { useEffect } from 'react';
import {ToDoContext} from "../context/context";
import {useTasksState} from "../hooks";
import {ITodoListProps} from "../types";


export const ToDoListComponent: React.FC<ITodoListProps>  = ({tasks, actions, children}) => {

    const tasksData = useTasksState()

    useEffect(() => tasksData.dispatch(tasksData.actions.setTasks(tasks)),[tasks])
    return (
        <ToDoContext.Provider value={{...tasksData, ...actions}}>
            {children}
        </ToDoContext.Provider>
    )
}