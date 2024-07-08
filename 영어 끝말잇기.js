function solution(n, words) {
  const checkArr = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const lastWord = checkArr[checkArr.length - 1];

    if (lastWord && lastWord[lastWord.length - 1] !== currentWord[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    if (checkArr.includes(currentWord)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    checkArr.push(currentWord);
  }

  return [0, 0];
}
