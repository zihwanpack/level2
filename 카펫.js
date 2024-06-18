function solution(brown, yellow) {
  let answer;
  let carpet = brown + yellow;
  for (let height = 3; height <= Math.sqrt(carpet); height++) {
    const width = carpet / height;
    if ((width - 2) * (height - 2) === yellow) {
      answer = [width, height];
      break;
    }
  }

  return answer;
}
