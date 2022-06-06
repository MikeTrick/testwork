import {createContext, useContext} from "react";

export const ToDoContext = createContext({} as any);

export const useToDoContext = () => useContext(ToDoContext);


