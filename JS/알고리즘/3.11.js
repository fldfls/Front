let list = [
  "선택 정렬",
  "삽입정렬",
  "버블정렬",
  "퀵정렬",
  "병합정렬",
  "해시",
  "스택",
  "큐",
  "힙",
  "그리디",
  "그래프",
  "동적계획법",
  "이분탐색",
  "완전탐색",
  "너비우선탐색",
  "깊이우선탐색",
];
let addList = [];
function randomList(li) {
  return li.sort(() => Math.random() - 0.5);
}

console.log("1주차 :", randomList(list));
console.log("2주차 : ", randomList(list));
console.log("3주차 : ", randomList(list));
console.log("4주차 : ", randomList(list));
