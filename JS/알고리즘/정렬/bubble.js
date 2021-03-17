const bubbleArr = [11, 6, 5, 2, 10, 3, 17, 1, 20, 18, 30];

function bubbleFun(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!temp) {
      break;
    }
    console.log(`${i + 1} 번 회전 : ${arr}`);
  }
  return arr;
}
console.log("현재 배열 : ", bubbleArr);

console.log(bubbleFun(bubbleArr));
