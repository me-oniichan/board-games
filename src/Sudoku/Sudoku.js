import { useState } from "react";
import Board from "./Board";
import sudokuContext from "./sudokuContext";

export default function Sudoku() {
  const grid = {};

  const board = useState(new Array(9).fill(0).map(() => new Array(9).fill({
    value : 0,
    class : "col",
    mode : "#3838f9ed"
  })));

  return(
      <sudokuContext.Provider value = {board}>
          <Board></Board>
      </sudokuContext.Provider>
  );
}
