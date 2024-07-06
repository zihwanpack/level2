function solution(s) {
  let answer = 0;
  const sArr = [...s];
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isValid = true;
    for (let bracket of sArr) {
      if (bracket === '(' || bracket === '{' || bracket === '[') {
        stack.push(bracket);
      } else {
        if (stack.length === 0) {
          isValid = false;
          break;
        }
        const lastBracket = stack.pop();

        if (
          (lastBracket !== '(' && bracket === ')') ||
          (lastBracket !== '{' && bracket === '}') ||
          (lastBracket !== '[' && bracket === ']')
        ) {
          isValid = false;
          break;
        }
      }
    }
    if (isValid && stack.length === 0) answer++;
    sArr.push(sArr.shift());
  }
  return answer;
}
