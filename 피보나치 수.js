function solution(n) {
  let temp1 = 0,
    temp2 = 1;

  if (n <= 1) {
    return n;
  }

  for (let i = 1; i < n; i++) {
    let result = (temp1 + temp2) % 1234567;
    temp1 = temp2;
    temp2 = result;
  }
  return temp2;
}
