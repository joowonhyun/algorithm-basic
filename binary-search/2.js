function checkGlass(glass, mid, k) {
  let broken = 0;
  for (let i = 0; i < glass.length; i++) {
    if (glass[i] <= mid) {
      // 참가자 수(mid)가 이 칸의 내구도보다 많거나 같으므로, 이 칸은 이미 깨짐
      broken++;
    } else {
      broken = 0;
    }
    if (broken >= k) {
      // 깨진 유리판이 연속해서 k개 이상이면 이 구간은 건너뛸 수 없음 참가자 mid명은 못 건넌다고 판단 → false 반환
      return false;
    }
  }
  return true;
}

function solution(glass, k) {
  let start = 1;
  let end = 200000000;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (checkGlass(glass, mid, k)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
console.log(solution([5, 3, 1, 2, 1, 3, 5], 3));
console.log(solution([4, 2, 2, 1, 4], 2));
