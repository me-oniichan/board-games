import { createContext } from "react";

const dupContext = createContext([[], ()=>{}]);
export default dupContext;