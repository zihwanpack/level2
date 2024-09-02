function solution(progresses, speeds) {
  const answer = [];
  const days = [];
  let count = 0;
  
  for (let i = 0; i < progresses.length; i++) {
      let restDay = Math.ceil((100 - progresses[i]) / speeds[i]);
      days.push(restDay);
  }
  
  let temp = days[0];
  
  for (let j = 0; j < days.length; j++) {
      if (temp < days[j]) {
          answer.push(count);
          count = 1;
          temp = days[j];
      } else {
          count++;
      }
  }
  answer.push(count);
  return answer;
}
