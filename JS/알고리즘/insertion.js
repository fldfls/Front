function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = 0;
    let j = i;
    while (arr[j - 1] > arr[j]) {
      temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
    console.log(`${i} 회전 : ${arr}`);
  }
  return arr;
}

const numArr = [11, 3, 2, 10, 5, 9, 1, 7, 4, 8];
console.log(numArr);
console.log(sort(numArr));
