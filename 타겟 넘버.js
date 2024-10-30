function dfs(answer, numbers, target, index, value) {
  if (index === numbers.length) {
    if (target === value) answer++;
    return answer;
  }

  answer = dfs(answer, numbers, target, index + 1, value + numbers[index]);
  answer = dfs(answer, numbers, target, index + 1, value - numbers[index]);
  return answer;
}

function solution(numbers, target) {
  let answer = 0;
  return dfs(answer, numbers, target, 0, 0);
}
