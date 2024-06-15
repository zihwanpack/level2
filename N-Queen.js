function solution(n) {
  let count = 0;
  const queenStack = [];

  const isPromising = (row, column) => {
    for (const [x, y] of queenStack) {
      if (
        row === x ||
        column === y ||
        Math.abs(row - x) === Math.abs(column - y)
      )
        return false;
    }
    return true;
  };

  const dfs = (row) => {
    if (row === n) {
      count++;
      return;
    }

    for (let column = 0; column < n; column++) {
      if (isPromising(row, column)) {
        queenStack.push([row, column]);
        dfs(row + 1);
        queenStack.pop();
      }
    }
  };

  dfs(0);
  return count;
}
