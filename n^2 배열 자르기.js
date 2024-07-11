function solution(n, left, right) {
  const answer = [];

  for (let i = left; i < right + 1; i++) {
    const column = parseInt(i / n);
    const row = i % n;
    answer.push(Math.max(column, row) + 1);
  }

  return answer;
}
