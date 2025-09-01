function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  /**
   * dx, dy 상우하좌
   */
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const d = Array.from({ length: n }, () => Array(m).fill(0));
  const queue = [];

  queue.push([0, 0]);
  d[0][0] = 1;
  maps[0][0] = 0;

  while (queue.length) {
    let [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny]);
        maps[nx][ny] = 0;
        d[nx][ny] = d[x][y] + 1;
      }
    }
  }
  return d[n - 1][m - 1] || -1;
}

console.log(
  solution([
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
