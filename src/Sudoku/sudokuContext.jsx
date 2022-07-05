import { createContext } from "react";

const sudokuContext = createContext([
  new Array(9).fill(0).map(() => new Array(9).fill({
    value : 0,
    class : "col",
    mode : "fixed"
  }))
  , () => {}]);
export default sudokuContext;