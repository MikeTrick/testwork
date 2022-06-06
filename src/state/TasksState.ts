import {makeAutoObservable} from "mobx";
import {ITask} from "../components/ToDoComponent/types";


class TasksState {
    tasks: ITask[] = [];

    constructor() {
        makeAutoObservable(this, {});
    }

    addTask = (task: ITask) => {
        this.tasks.push(task)
    }

    deleteTask = (id: string) => {
        this.tasks = this.tasks.filter(({id: taskId}) => id !== taskId)
    }

    setIsChecked = (id: string) => {
        this.tasks = this.tasks.map((task) => {
            if (id === task.id) return ({
                ...task,
                isCompleted: !task.isCompleted
            })
            return task
        })
    }

    get Tasks(): ITask[] {
        return this.tasks;
    }
}

export default new TasksState();
