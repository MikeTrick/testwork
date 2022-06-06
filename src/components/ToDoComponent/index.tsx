import React from 'react';
import {ToDoListComponent} from "./components";
// import {Card} from "./Card/card";

import './index.scss';
import {ITodoListProps} from "./types";
import {List} from "./components/List";

export const ToDoList: React.FC<ITodoListProps> = (props) => {

    return (
        <ToDoListComponent {...props}>
            <div className='todo-wrapper'>
                <List />
            </ div>
        </ToDoListComponent>
    );

}