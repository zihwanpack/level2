function solution(s) {
  let cnt = 0;

  for (let bracket of s) {
    if (bracket === '(') {
      cnt++;
    } else if (bracket === ')') {
      cnt--;
    }
    if (cnt === -1) {
      return false;
    }
  }

  return cnt === 0 ? true : false;
}
