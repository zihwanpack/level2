function solution(clothes) {
  let answer = 1;
  const map = new Map();

  clothes.forEach((cloth) => {
    const kind = cloth[1];
    map.set(kind, (map.get(kind) || 0) + 1);
  });

  for (let cnt of map.values()) {
    answer *= cnt + 1;
  }
  return answer - 1;
}
