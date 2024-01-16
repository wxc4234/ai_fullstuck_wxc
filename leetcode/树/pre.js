let root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    }
  }
}
function preOrder(root) {
  if (!root) return ;
  let res = []
  res.push(root.val)
  preOrder(root.left)
  preOrder(root.right)
  return res;
}

console.log(preOrder(root));