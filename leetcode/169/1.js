var majorityElement = function (nums) {
  // 投票算法 支持/反对  以O(n)的时间复杂度和O(1)的空间复杂度求众数
  let count = 1; // 投票数 空间复杂度O(1)
  let major = nums[0]; // 空间复杂度O(1)
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      major = nums[i]; // 重置major
    }
    if (major === nums[i]) { // 投票
      count++; // 支持, 投票数+1
    } else {
      count--;// 反对, 投票数-1
    }
  }
  return major;
}
console.log(majorityElement([2,2,2,2,3,3,4,4]));