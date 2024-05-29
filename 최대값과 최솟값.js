function solution(s) {
  const sArr = s.split(' ').map((e) => Number(e));
  let answer = '';
  answer += Math.min(...sArr);
  answer += ' ';
  answer += Math.max(...sArr);
  return answer;
}
