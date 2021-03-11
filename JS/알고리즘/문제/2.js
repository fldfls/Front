let n, k;
let cnt,
  num = 0;
let a = [];

function print() {
  let i;
  for (i = 0; i < num; i++) console.log(a[i]);
  console.log("\n");
  return;
}
function solve(n, k) {
  let i;
  if (n == 0) {
    print();
    cnt++;
  }

  for (i = min(n, k); i >= 1; i--) {
    a[num++] = i;
    solve(n - i, i);
    num--;
  }
}

function main() {
  solve(n, n);
  console.log(cnt);
}
