/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head === null) return false
    
    let nodeCollection = new Set()
    
    let current = head
    while(!nodeCollection.has(current)) {
        if(current.next === null) return false
        nodeCollection.add(current)
        console.log("adding", current.val)
        current = current.next
    } 
    if(nodeCollection.has(current)) {
        console.log(current.val)
        return true
    } 
    
    
};