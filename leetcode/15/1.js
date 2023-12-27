// var threeSum = function(nums) {
//   let ans = [];
//      const len = nums.length;
//      if(nums == null || len < 3) return ans;
//      nums.sort((a, b) => a - b); // 排序,方便去重结果，排序后相同的数字会相邻
//      for (let i = 0; i < len ; i++) {
//          if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
//          if(i > 0 && nums[i] == nums[i-1]) continue; // 去重, 如果当前数字与上一轮数字相同, 跳过这个数字
//          let L = i+1;// 左指针
//          let R = len-1;// 右指针
//          while(L < R){
//              const sum = nums[i] + nums[L] + nums[R];// 三数之和
//              if(sum == 0){
//                  ans.push([nums[i],nums[L],nums[R]]);
//                  while (L<R && nums[L] == nums[L+1]) L++; // 去重, 如果左指针与下一轮左指针相同, 跳过这个数字
//                  while (L<R && nums[R] == nums[R-1]) R--; // 去重, 如果右指针与下一轮右指针相同, 跳过这个数字
//                  L++;// 左指针右移
//                  R--;// 右指针左移
//              }
//              else if (sum < 0) L++;// 如果三数之和小于0, 左指针右移
//              else if (sum > 0) R--;// 如果三数之和大于0, 右指针左移
//          }
//      }
//      return ans;
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const target = 0;
  for (let i = 0; i < nums.length - 2; i++){ //length - 2 为了保证左右指针不会越界, 因为左右指针会向中间靠拢
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重,跳过相同的数字
    let left = i + 1; // 左指针
    let right = nums.length - 1; // 右指针
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);// 和等于 target, 放入结果数组
        // 性能优化
        while (left < right && nums[left] === nums[left + 1]) left++;// 去重, 如果左指针与下一轮左指针相同, 跳过这个数字
        while(left < right && nums[right] === nums[right - 1]) right--;// 去重, 如果右指针与下一轮右指针相同, 跳过这个数字
        left++; // 和等于 target, 左指针右移
        right--; // 和等于 target, 右指针左移
      } else if (sum < target) {
        left++; // 和小于 target, 左指针右移
      } else {
        right--; // 和大于 target, 右指针左移
      }
    }
  }
  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));