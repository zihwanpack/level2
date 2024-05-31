function solution(s) {
  const answer = [0, 0];
  while (s !== '1') {
    const oneArr = s.split('').filter((char) => char === '1');
    answer[0]++;
    answer[1] += s.length - oneArr.length;
    s = oneArr.length.toString(2);
  }
  return answer;
}
