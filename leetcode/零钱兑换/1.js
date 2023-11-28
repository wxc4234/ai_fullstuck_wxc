const coinChange = function (coins, amount) {
  const f = [];
  f[0] = 0;
  for (let i = 1; i <= amount; i++){
    f[i] = Infinity;//先设置为最大值
    for (let j = 0; j < coins.length; j++){
      if (i - coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);//取最小值 1表示当前硬币 coins[j] 1个 f[i - coins[j]]表示剩余的钱数需要的最少硬币数
      }
    }
  }
  if (f[amount] === Infinity) {
    return -1;
  }
  return f[amount];
}
console.log(coinChange([1, 2, 5], 11));