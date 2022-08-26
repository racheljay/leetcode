/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null
    
    const savePath = data => {

        const pathSet = new Set()

        let current = root

        while(current !== null) {
            // console.log(current.val)
            pathSet.add(current)
            if (data === current.val) {
                return pathSet
            } else if(data < current.val) {
                if(current.left === null) {
                    console.log("nope")
                    return
                } else {
                    current = current.left
                }
            } else {
                if(current.right === null) {
                    console.log("nada")
                    return
                } else {
                    current = current.right
                }
            }
        }
        return pathSet
    }
 
    
    const pSet = savePath(p.val)
    const qSet = savePath(q.val)
    
    // console.log(pSet, qSet)
    
    const commonAncestors = new Set()
    
    for (const node of qSet) {
        if (pSet.has(node)) {
            commonAncestors.add(node)
        }
    }
    console.log(commonAncestors)
    
    const commonArr = [...commonAncestors]
    console.log(commonArr)
    
    return commonArr[commonArr.length -1]
    
};