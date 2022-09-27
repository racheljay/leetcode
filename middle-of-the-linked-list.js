/* First Solution 
    time: O(n)
    space: O(n)
*/

var middleNode = function(head) {
    
    let index = 1
    let nodeStorage = {}
    
    let current = head
    
    while(current !== null) {
        nodeStorage[index] = current
        index++
        current = current.next
    }
    
    
    return nodeStorage[Math.round(index / 2)]
    
};

/*
    Second Solution
    time: O(n)
    space: O(1)
 */


const middle = (head) => {
    let slow, fast = head

    while(slow !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}