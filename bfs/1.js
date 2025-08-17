function solution(n, stations) {
  let answer = 0;
  const visited = Array.from({ length: n }, () => 0);
  const queue = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      queue.push(i);
      visited[i] = 1;

      while (queue.length) {
        const x = queue.shift();

        for (let j = 0; j < n; j++) {
          if (stations[x][j] === 1 && visited[j] === 0) {
            queue.push(j);
            visited[j] = 1;
          }
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);

console.log(
  solution(4, [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
