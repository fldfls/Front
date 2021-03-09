function box(n) {
  if (n == 1) return 1;
  else if (n == 2) return 3;
  else return box(n - 1) + 2 * box(n - 2);
}

console.log(box(5));
