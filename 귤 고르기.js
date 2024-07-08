function solution(k, tangerine) {
  let answer = 0;
  const size = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    const guul = tangerine[i];
    size.set(guul, size.has(guul) ? size.get(guul) + 1 : 1);
  }

  const sortSize = [...size].sort((a, b) => b[1] - a[1]);

  for (let j = 0; j < sortSize.length; j++) {
    if (k > 0) {
      k -= sortSize[j][1];
      answer++;
    }
  }

  return answer;
}
