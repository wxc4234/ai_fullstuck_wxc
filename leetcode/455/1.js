// 暴力破解 逻辑 O(n^2)
// 降到 O(nlogn) 的方法是先排序, 然后双指针
// 策略选择 双指针

const findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let gi = 0;
  let sj = 0;
  let res = 0;
  while (gi < g.length && sj < s.length) {
    if (g[gi] <= s[sj]) { // 当下的饼干满足当前的胃口
      res++;
      gi++;
      sj++;
    } else {
      sj++;
    }
  }
  return res;
}
var g = [1, 2, 3];
var s = [1, 1];
console.log(findContentChildren(g, s));