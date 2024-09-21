function dfs(count, dungeons, health, visitedArr) {
  let maxCount = count;

  dungeons.forEach((dungeon, i) => {
    const [limit, damage] = dungeon;
    if (!visitedArr[i] && limit <= health) {
      visitedArr[i] = true;
      maxCount = Math.max(
        maxCount,
        dfs(count + 1, dungeons, health - damage, visitedArr)
      );
      visitedArr[i] = false;
    }
  });

  return maxCount;
}

function solution(k, dungeons) {
  const visitedArr = new Array(dungeons.length).fill(false);
  const answer = dfs(0, dungeons, k, visitedArr);
  return answer;
}
