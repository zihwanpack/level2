function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const map = new Map();
    const currentDiscount = discount.slice(i, i + 10);

    for (let product of currentDiscount) {
      map.has(product)
        ? map.set(product, map.get(product) + 1)
        : map.set(product, 1);
    }

    let isMatch = true;
    for (let j = 0; j < want.length; j++) {
      const wantProduct = want[j];
      if (!map.has(wantProduct) || map.get(wantProduct) < number[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) answer++;
  }

  return answer;
}
