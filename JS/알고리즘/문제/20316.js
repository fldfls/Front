function up(number) {
  if (number > 30) return 0;
  else if (number == 1) return 1;
  else if (number == 2) return 2;
  else if (number == 3) return up(number - 1) + up(number - 2) + 1;
  else return up(number - 1) + up(number - 2) + up(number - 3);
}

console.log(up(15));
