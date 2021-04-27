function coin(n, k, numbers) {
  let dp = new Array(k + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j >= numbers[i]) dp[j] += dp[j - numbers[i]];
    }
  }
  return dp[k];
}

console.log(coin(3, 10, [1, 2, 5])); // 10
