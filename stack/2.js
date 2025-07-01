function solution(gate) {
  const stack = [];
  for (let i = 0; i < gate.length; i++) {
    if (gate[i] === "<") {
      stack.push(gate[i]);
    } else {
      stack.pop(gate[i]);
    }
  }
  return stack.length === 0;
}
console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
