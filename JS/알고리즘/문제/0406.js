const arr = [3, 1, 5, 3, 2, 4, 1];

function sortCounting(N, arr) {
  const count = Array(N).fill(0);
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
