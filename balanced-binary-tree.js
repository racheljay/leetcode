/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
    First solution O( n log n)
*/

const height = (node) => {
    if (node === null) {
        return -1
    }
    return 1 + Math.max(height(node.left), height(node.right))
}
var isBalanced = function (root) {
    if (root === null) {
        return true
    }

    return Math.abs(height(root.left) - height(root.right)) < 2 &&
        isBalanced(root.left) && isBalanced(root.right)
};


/*
    Preferred solution in O(n)
 */
const isBalancedHelper = (root) => {
    if (root === null) {
        return [true, -1]
    }

    let leftArr = isBalancedHelper(root.left)
    let leftIsBalanced = leftArr[0]
    let leftHeight = leftArr[1]
    if (leftIsBalanced === false) {

        return [false, 0]
    }
    let rightArr = isBalancedHelper(root.right)
    let rightIsBalanced = rightArr[0]
    let rightHeight = rightArr[1]
    if (rightIsBalanced === false) {
        return [false, 0]
    }
    return [(Math.abs(leftHeight - rightHeight) < 2), 1 + Math.max(leftHeight, rightHeight)]
}
const isBalanced = function (root) {
    return isBalancedHelper(root)[0]
};