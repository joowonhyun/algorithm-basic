function solution(n, speeds) {
  let left = 1;
  let right = Math.max(...speeds) * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const total = speeds.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (total >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
console.log(solution(8, [5, 9]));
console.log(solution(6, [7, 10]));
