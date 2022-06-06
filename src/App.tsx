import React from 'react';
import {ToDoList} from "./components/ToDoComponent";

import './styles/style.scss'
import {observer} from "mobx-react-lite";
import TasksState from "./state/TasksState";

export const App: React.FC = observer(() => (
    <div className='list-wrapper'>
        <div className="list-wrapper__layout">
            <ToDoList
                tasks={[...TasksState.Tasks]}
                actions={{
                    addTask: TasksState.addTask,
                    deleteTask: TasksState.deleteTask,
                    setIsChecked: TasksState.setIsChecked,
                }}
            />
        </div>
    </div>

))
