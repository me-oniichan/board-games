export function isvalid(grid, row, col, val) {
  if (val === 0) return true;
  for (let i = 0; i < 9; i++) {
    if (grid[row][i].value === val) return false;
    if (grid[i][col].value === val) return false;
  }
  for (let i = 0; i < 3; i++) {
    if (row < 3 && col < 3) {
      if (
        grid[i][0].value === val ||
        grid[i][1].value === val ||
        grid[i][2].value === val
      )
        return false;
    } else if (row < 6 && col < 3) {
      if (
        grid[i + 3][0].value === val ||
        grid[i + 3][1].value === val ||
        grid[i + 3][2].value === val
      )
        return false;
    } else if (row < 9 && col < 3) {
      if (
        grid[i + 6][0].value === val ||
        grid[i + 6][1].value === val ||
        grid[i + 6][2].value === val
      )
        return false;
    } else if (row < 3 && col < 6) {
      if (
        grid[i][3].value === val ||
        grid[i][4].value === val ||
        grid[i][5].value === val
      )
        return false;
    } else if (row < 3 && col < 9) {
      if (
        grid[i][6].value === val ||
        grid[i][7].value === val ||
        grid[i][8].value === val
      )
        return false;
    } else if (row < 6 && col < 6) {
      if (
        grid[i + 3][3].value === val ||
        grid[i + 3][4].value === val ||
        grid[i + 3][5].value === val
      )
        return false;
    } else if (row < 6 && col < 9) {
      if (
        grid[i + 3][6].value === val ||
        grid[i + 3][7].value === val ||
        grid[i + 3][8].value === val
      )
        return false;
    } else if (row < 9 && col < 6) {
      if (
        grid[i + 6][3].value === val ||
        grid[i + 6][4].value === val ||
        grid[i + 6][5].value === val
      )
        return false;
    } else if (row < 9 && col < 9) {
      if (
        grid[i + 6][6].value === val ||
        grid[i + 6][7].value === val ||
        grid[i + 6][8].value === val
      )
        return false;
    }
  }

  return true;
}


export function solveGrid(grid, row, col) {
  const solve = function (grid, row, col) {
    if (row > 8 && col >= 8) return grid;
    else if (row > 8) {
      row = 0;
      col++;
    }
    if (grid[row][col].value !== 0) {
      return solve(grid, row + 1, col);
    }

    for (let i = 1; i <= 9; i++) {
      if (isvalid(grid, row, col, i)) {
        grid[row][col].value = i;
        if (solve(grid, row + 1, col)) return grid;
        else grid[row][col].value = 0;
      }
    }
    return false;
  };
  return solve(grid, row, col);
}


export function verify(grid, row, col, val){
//return duplicate values
  let set = new Set();
  for (let i = 0; i < 9; i++){
    if ()
  }
}