# 多数元素

- 排序 O(nlogn) 拿到中间的数
- 空间换时间，Map + count +major 值作为key

## 面试官想了解什么

- 算法简单，利用排序
- 能不能优化一下 具体开发，如何以O(n)的时间复杂度解决问题
- 这道题背后的算法思想是什么？ 摩尔投票法
  - 投票 nums[i] count = 1 当nums[i+1] count = 0 时，nums[i+1] count = 1
  - 当nums[i+1] == nums[i] count++ 当nums[i+1] != nums[i] count--

- 数组众数问题，可以使用投票法，时间复杂度O(n)，空间复杂度O(1)解决问题。
