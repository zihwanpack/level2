function checkCache(cache, city, cacheSize) {
  const index = cache.indexOf(city);

  if (index !== -1) {
    cache.splice(index, 1);
  } else if (cache.length === cacheSize) {
    cache.shift();
  }

  cache.push(city);
  return index !== -1;
}

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  if (cacheSize === 0) {
    return 5 * cities.length;
  }

  cities.forEach((city) => {
    city = city.toUpperCase();
    if (!checkCache(cache, city, cacheSize)) {
      answer += 5;
    } else {
      answer++;
    }
  });

  return answer;
}
