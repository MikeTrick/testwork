import React from "react";

export enum ToDoActions {
    SET_TASKS = 'SET_TASKS',
    SET_SEARCH_PHRASE = 'SET_SEARCH_PHRASE',
    SET_FILTER_TYPE = 'SET_FILTER_TYPE',
}

export enum FilterTypes {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    UNCOMPLETED = 'UNCOMPLETED',
}

// export type defaultActionType<T> = (payload?: T) => {type: ToDoActions, payload: T}


export interface ITask {
    title: string;
    id:string;
    isCompleted: boolean;
}

export interface ITodoListProps {
    tasks: ITask[],
    actions: {
        addTask: (task: ITask) => void
        deleteTask: (id: string) => void
        setIsChecked: (id: string) => void
    },
    children?: React.ReactNode,
}


export type InferType<T> = T extends { [key: string]: infer U } ? U : never
