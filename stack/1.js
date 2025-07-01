function solution(boxes) {
  const stack = [];
  for (const box of boxes) {
    // 맨 위랑 넣으려는 요소와 같지 않다면
    if (stack.at(-1) !== box) {
      stack.push(box);
    }
  }
  return stack;
}
console.log(solution([2, 2, 5, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0, 0]));
