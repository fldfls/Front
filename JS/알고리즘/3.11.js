// let list = [
//   "선택 정렬",
//   "삽입정렬",
//   "버블정렬",
//   "퀵정렬",
//   "병합정렬",
//   "해시",
//   "스택",
//   "큐",
//   "힙",
//   "그리디",
//   "그래프",
//   "동적계획법",
//   "이분탐색",
//   "완전탐색",
//   "너비우선탐색",
//   "깊이우선탐색",
// ];
// let addList = [];
// function randomList(li) {
//   return li.sort(() => Math.random() - 0.5);
// }

// console.log("1주차 :", randomList(list));
// console.log("2주차 : ", randomList(list));
// console.log("3주차 : ", randomList(list));
// console.log("4주차 : ", randomList(list));

const list = [
  "선택정렬",
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
let arr = list.slice();
let students = Array.from({ length: 4 }, () => []);
let random = 0;

const comparison = (len, v, j) => {
  for (let i = 0; i < len; i++) {
    if (students[i][j] == v) return true;
  }
  return false;
};

const solution = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 20; j++) {
      if (i == 0) {
        random = Math.floor(Math.random() * arr.length);
        students[i][j] = arr[random];
        arr.splice(random, 1);
      } else {
        do {
          random = Math.floor(Math.random() * arr.length);
        } while (comparison(i, arr[random], j));
        students[i][j] = arr[random];
        arr.splice(random, 1);
      }
      if (arr.length < 5) arr = list.slice();
    }
  }
};

solution();

for (let i = 0; i < 4; i++) {
  let txt = i + 1 + " 주차" + ": ";
  for (let j = 0; j < 20; j++) {
    txt += students[i][j] + " ";
  }

  console.log(txt);
}
