const arr = [5, 4, 3, 2, 1, 1, 1, 1, 3, 4, 5, 5, 2, 2, 2];

function sortCounting(arr) {
  const count = Array(5).fill(0);
  let sort = [];

  for (let i = 0; i < arr.length; i++) count[arr[i] - 1]++;

  for (let i = 0; i < count.length; i++) {
    const sortNum = Array(count[i]).fill(i + 1);
    sort = sort.concat(sortNum);
  }
  console.log(count);
  console.log(sort);
}

console.log(sortCounting(arr));
