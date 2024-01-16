let tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    left: {
      val: 'F'
    },
    right: {
      val: 'G'
    }
  }
}


function preorder(root) {
  if (!root) return

  
  preorder(root.left);
  preorder(root.right);
  console.log(root.val);
}

preorder(tree)