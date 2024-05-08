// function maxTwo(nums) {
//   let max = Math.max(nums[0], nums[1]);
//   let second = Math.min(nums[0], nums[1]);

//   for (let i = 2; i < nums.length; i++){
//     if (nums[i] > max) {
//       second = max;
//       max = nums[i];
//     } else if (nums[i] > second && nums[i] !== max) {
//       second = nums[i];
//     }
//   }

//   return second
// }

// const nums = [2, 1, 5, 7, 4, 8];
// console.log(maxTwo(nums));

var a = 1;

function b() {
  var a = 2;

  function c() {
    console.log(a);
  }

  return c;
}

b()();
