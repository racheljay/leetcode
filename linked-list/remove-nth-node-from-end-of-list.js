/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


/* Remove from leetcode solution */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const list = new ListNode(1)
// list.next = new ListNode(2)
// list.next.next = new ListNode(3)
// list.next.next.next = new ListNode(4)
// list.next.next.next.next = new ListNode(5)


const printList = ll => {
    let node = ll
    const nodeArr = []

    if (node === null) {
        console.log("empty list")
    }
    while (node !== null) {
        nodeArr.push(node.val)
        node = node.next
    }
    console.log(nodeArr)
}


/* ****************************** */
var removeNthFromEnd = function (head, n) {
    let left = head
    let count = 0
    let right = head

    if(head.next === null) {
        return null
    }
    while (count < n) {
        right = right.next
        count++
    }
    // console.log(right.val)
    while (right.next !== null) {
        left = left.next
        right = right.next
    }
    left.next = left.next.next

    printList(head)

};

removeNthFromEnd(list, 1)