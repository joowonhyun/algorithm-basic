function solution(s) {
  const stack = [];
  for (const char of s) {
    if (stack.at(-1)?.toUpperCase() === char.toUpperCase()) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));
