import {useCallback, useMemo, useReducer} from "react";
import {FilterTypes, InferType, ITask, ToDoActions} from "../types";


export const useTasksState = () => {
    const initialState = {
        tasks: [],
        searchPhrase: '',
        searchType: FilterTypes.ALL,
        filterTasks: [],
    };

    const filterTasks = useCallback((filterType: FilterTypes, tasks: ITask[], searchPhrase:string) => {
        let filterTasks = tasks
        switch (filterType) {
            case FilterTypes.COMPLETED:
                filterTasks = tasks.filter((task) => task.isCompleted)
                break
            case FilterTypes.UNCOMPLETED:
                filterTasks = tasks.filter((task) => !task.isCompleted)
                break
            default:
                break
        }
        return filterTasks.filter((task) => task.title.includes(searchPhrase))
    }, [])

    const ActionCreators = useMemo(() => ({
        setSearchPhrase: (phrase: string) => ({type: ToDoActions.SET_SEARCH_PHRASE, payload: phrase}),
        setSearchType: (searchType: FilterTypes) => ({type: ToDoActions.SET_FILTER_TYPE, payload: searchType}),
        setTasks: (tasks: any) => ({type: ToDoActions.SET_TASKS, payload: tasks}),
    }), [])

    const filterReducer = (state: any, action: ReturnType<InferType<typeof ActionCreators>>) => {
        switch (action.type) {
            case ToDoActions.SET_SEARCH_PHRASE: {
                return {
                    ...state,
                    searchPhrase: action.payload,
                    filterTasks: filterTasks(state.searchType, state.tasks, action.payload)
                }
            }
            case ToDoActions.SET_TASKS: {
                return {
                    ...state,
                    tasks: action.payload,
                    filterTasks: filterTasks(state.searchType, action.payload, state.searchPhrase)

                }
            }

            case ToDoActions.SET_FILTER_TYPE: {
                return {
                    ...state,
                    searchType: action.payload,
                    filterTasks: filterTasks(action.payload, state.tasks, state.searchPhrase)
                }
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(filterReducer, initialState)
    return {
        actions: ActionCreators,
        state,
        dispatch
    }

}



