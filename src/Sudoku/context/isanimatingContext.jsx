import { createContext } from "react";

const isanimatingContext = createContext([false, ()=>{}]);
export default isanimatingContext;