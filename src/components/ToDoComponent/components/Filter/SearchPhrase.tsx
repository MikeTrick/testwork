import React from "react";
import {useToDoContext} from "../../context/context";

export const SearchPhrase: React.FC = () => {
    const {dispatch, state: {searchPhrase}, actions: {setSearchPhrase}} = useToDoContext()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchPhrase(e.target.value))
    }

    return (
        <input value={searchPhrase} onChange={changeHandler} placeholder={'Начните вводить'}/>
    )
}