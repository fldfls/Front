const add = function (x, y) {
  return x + y;
}; //함수 표현식
const plus = add;

console.log(add(3, 4));
console.log(plus(5, 6));
