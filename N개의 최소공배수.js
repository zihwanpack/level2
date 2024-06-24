// 최대공약수
const gcd = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};
function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}
