import React, {useMemo} from 'react';
import {useToDoContext} from "../../context/context";
import {Footer} from "./Footer";
import {Card} from "../../Card/card";
import {FilterTypes} from "../../types";
import {Filter} from "../Filter/Filter";
import {v4 as uuidv4} from 'uuid'
import {SearchPhrase} from "../Filter/SearchPhrase";

export const List = () => {

    const {state: {filterTasks: tasks}} = useToDoContext();
    const filters = useMemo(() => [
        {type: FilterTypes.ALL, description: 'ВСЕ'},
        {type: FilterTypes.COMPLETED, description: 'Выполненные'},
        {type: FilterTypes.UNCOMPLETED, description: 'Не выполненные'},
    ], [])

    return (
        <div className={'todo-list'}>
            <div className="todo-list__filters">
                {filters.map(({type, description}) => <Filter
                        key={uuidv4()}
                        type={type}
                        description={description}
                    />
                )}
                <SearchPhrase/>
            </div>
            <div className="todo-list__items">
                <div className="todo-list__header">
                    <h1>Список задач</h1>
                    <hr/>
                </div>
                <div className="todo-list__cards-container">
                    {Boolean(tasks.length) && tasks.map((task) => <Card
                        key={`${task.id}`}
                        id={task.id}
                        title={task.title}
                        isCompleted={task.isCompleted}
                    />)}
                </div>
            </div>
            <Footer/>
        </div>)
}
