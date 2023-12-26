var rob = function (nums) {
  // 没有状态转移方程就不要动手
  const dp = []; //最优子结构, O(n)的空间复杂度 一维数组，缓存状态结果
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < nums.length + 2; i++){
    dp[i]=Math.max(dp[i-2]+nums[i-2],dp[i-1])
  }
  return dp[dp.length-1]
}

// f(i)
console.log(rob([1,3,1]));