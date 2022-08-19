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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    
    if(root === null) return null
    let current = root
    if(current.left === null && current.right === null) return root
    
    let oldLeft = current.left
    current.left = current.right
    current.right = oldLeft
    
    if(current.left !== null) {
        invertTree(current.left)
    }
    if(current.right !== null) {
        invertTree(current.right)
    }
    
    return root
};