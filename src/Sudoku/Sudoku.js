import { useState } from "react";
import Board from "./Board";
import sudokuContext from "./sudokuContext";

export default function Sudoku() {
  const grid = {};

  for (let i = 1; i < 10; i++) {
    grid[i] = {};
    for (let j = 1; j < 10; j++) {
      grid[i][j] = {};
      grid[i][j].val = 0;
      grid[i][j].class = "cell";
      grid[i][j].color = "varibale";
    }
  }
  const board = useState(grid);

  return(
      <sudokuContext.Provider value = {board}>
          <Board></Board>
      </sudokuContext.Provider>
  );
}
