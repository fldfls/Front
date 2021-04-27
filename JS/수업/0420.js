function Memo(n) {
  const d = [];
  d[1] = 1;
  d[2] = 2;
  for (let i = 3; i <= n; i++) d[i] = (d[i - 1] + d[i - 2]) % 10007;
  return d[n];
}

console.log(Memo(9));

function Memo2(n) {
  const d = [];
  d[0] = 1;
  d[1] = 1;
  for (let i = 2; i <= n; i++) d[i] = (d[i - 1] + d[i - 2] * 2) % 10007;
  return d[n];
}

console.log(Memo2(8));
