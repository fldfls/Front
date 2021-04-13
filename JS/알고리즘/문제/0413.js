// function Tree(a, b) {
//   if (a < b) return Tree(a, Math.floor(b / 2)) + 1;
//   else if (a > b) return Tree(Math.floor(a / 2), b) + 1;
//   else if (a == b) return 0;
// }

// console.log(Tree(2000000000, 205000000));

const arrNum = [5, -3, 4, 6, 2, -5, 10];
function part(length, numArr) {
  let N = [];
  let max = 0;
  for (let i = 0; i < length; i++) {
    if (N[i] + numArr[i] > numArr[i]) {
      N[i + 1] = N[i] + numArr[i];
    } else N[i + 1] = numArr[i];
  }

  for (let i = 0; i < length; i++) {
    if (max < N[i + 1]) max = N[i + 1];
  }
  return max;
}

console.log(part(arrNum.length, arrNum));
