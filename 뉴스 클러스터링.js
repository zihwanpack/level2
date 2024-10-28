function splitString(text) {
  const result = [];
  for (let i = 0; i < text.length - 1; i++) {
    const pair = text.substr(i, 2).toLowerCase();
    if (pair.match(/^[a-z]{2}$/)) {
      result.push(pair);
    }
  }
  return result;
}

function calculateSimilarity(str1Arr, str2Arr) {
  const set = new Set([...str1Arr, ...str2Arr]);
  let unionCount = 0;
  let intersectionCount = 0;

  set.forEach((element) => {
    const numOfStr1Ele = str1Arr.filter((str) => str === element).length;
    const numOfStr2Ele = str2Arr.filter((str) => str === element).length;
    unionCount += Math.max(numOfStr1Ele, numOfStr2Ele);
    intersectionCount += Math.min(numOfStr1Ele, numOfStr2Ele);
  });
  return unionCount !== 0 ? Math.trunc((intersectionCount / unionCount) * 65536) : 65536;
}

function solution(str1, str2) {
  const str1Arr = splitString(str1);
  const str2Arr = splitString(str2);
  return calculateSimilarity(str1Arr, str2Arr);
}
