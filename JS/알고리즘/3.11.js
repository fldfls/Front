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

const randomFunc = () => {
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

randomFunc();

for (let i = 0; i < 4; i++) {
  let txt = i + 1 + " 주차" + ": ";
  for (let j = 0; j < 20; j++) {
    txt += students[i][j] + " ";
  }

  console.log(txt);
}
