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
 * @return {number}
 */
 var maxDepth = function(root) {
    
    // let maxDepth = 0
    
    const recurse = (node) => {
        if(node === null) {
            return 0
        }
        
        return Math.max(recurse(node.left) + 1, recurse(node.right) + 1)
    }
    
    return recurse(root)
    
};