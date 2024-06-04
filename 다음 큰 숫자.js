function solution(n) {
  const numBin = n.toString(2);
  let countBin = 0;

  for (let num of numBin) {
    if (num === '1') countBin++;
  }

  for (let i = n + 1; i < 1000000; i++) {
    let countBinI = 0;
    const iBin = i.toString(2);
    for (let num of iBin) {
      if (num === '1') countBinI++;
    }
    if (countBinI === countBin) {
      return i;
    }
  }
}
