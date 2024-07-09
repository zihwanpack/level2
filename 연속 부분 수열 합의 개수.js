function solution(elements) {
  const set = new Set();
  const len = elements.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 1; j <= len; j++) {
      sum += elements[(i + j - 1) % len];
      set.add(sum);
    }
  }
  return set.size;
}
