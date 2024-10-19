function solution(phone_book) {
  let answer = true;
  const hash = new Map();

  phone_book.forEach((phone) => {
    hash.set(phone, true);
  });

  for (let [number] of hash) {
    for (let i = 1; i < number.length; i++) {
      if (hash.get(number.slice(0, i))) {
        answer = false;
        return answer;
      }
    }
  }
  return answer;
}
