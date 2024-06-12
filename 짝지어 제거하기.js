function solution(s) {
  const stack = [];

  for (let alphabet of s) {
    if (!stack.length || stack[stack.length - 1] !== alphabet)
      stack.push(alphabet);
    else stack.pop();
  }
  return stack.length ? 0 : 1;
}
