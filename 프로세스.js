function solution(priorities, location) {
  let answer = 0;
  const indexArray = [];

  for (let i = 0; i < priorities.length; i++) {
    indexArray.push(i);
  }

  while (priorities.length) {
    const currentProcess = priorities.shift();
    const currentIndex = indexArray.shift();

    const higherProcess = Math.max(...priorities);

    if (currentProcess >= higherProcess) {
      answer++;
      if (currentIndex === location) return answer;
    } else {
      priorities.push(currentProcess);
      indexArray.push(currentIndex);
    }
  }

  return answer;
}
