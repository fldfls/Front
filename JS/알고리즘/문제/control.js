function remote(num1, num2) {
  let value;
  let count = 0;
  if (num1 < -20 || num2 > 40) return "잘못된 값";
  if (num1 > num2) value = num1 - num2;
  else value = num2 - num1;

  count = value / 10;
  value = value % 10;

  switch (value) {
    case 1:
    case 5:
      count += 1;
      break;
    case 2:
    case 4:
    case 6:
    case 9:
      count += 2;
      break;
    case 3:
    case 7:
    case 8:
      count += 3;
      break;
  }
  return Math.floor(count);
}

console.log(remote(-7, 25));
console.log(remote(11, 25));
console.log(remote(2, 16));
console.log(remote(-4, 28));
console.log(remote(-19, 5));
