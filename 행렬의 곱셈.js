function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

function arrMutiply(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}

function solution(arr1, arr2) {
  const answer = [];
  const transposedArr2 = transpose(arr2);

  for (let vector1 of arr1) {
    const row = [];
    for (let vector2 of transposedArr2) {
      row.push(arrMutiply(vector1, vector2));
    }
    answer.push(row);
  }

  return answer;
}
