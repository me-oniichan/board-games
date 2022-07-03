import { createContext } from "react";

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

const sudokuContext = createContext([grid, () => {}]);
export default sudokuContext;