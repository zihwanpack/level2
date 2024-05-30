function solution(s) {
  const sArr = s.split(' ');

  const result = sArr.map((word) => {
    if (word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return result.join(' ');
}
