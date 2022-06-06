import React from 'react'
import {useToDoContext} from "../../context/context";

// Типизировать
export const Filter: React.FC<any> = ({ type, description }) => {

    const { dispatch, state: { searchType }, actions: { setSearchType } } = useToDoContext()
    const setFilterHandler = () => dispatch(setSearchType(type))

    const getClassName = () => {
        const baseClassName = 'todo-list__filter'
        return searchType === type ? baseClassName + ' ' + baseClassName+'_active' : baseClassName
    }

    return (
        <div className={getClassName()} onClick={setFilterHandler}>
            { description }
        </div>
    )
}