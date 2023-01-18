/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/* ****** Take this out before submitting to leetocde ******** */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/********************************************* */

/* Playground to get back on my feet*/

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
// list.next.next.next.next = new ListNode(5)

// console.log(list)

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

const reverseList = node => {
    let current = node
    let previous = null
    let after = node.next

    while (after !== null) {
        current.next = previous
        previous = current
        current = after
        after = current.next
    }
    current.next = previous
    return current
}

const splitList = ll => {
    let fast = ll
    let slow = ll

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
            fast = fast.next.next
    }
    console.log(slow.val)

    let oldNext = slow.next
    slow.next = null
    console.log(oldNext)
    console.log(ll)
    return reverseList(oldNext)
}

printList(splitList(list))
printList(list)


/* end playground */

var reorderList = function (head) {
    let current = head
    // const reversed = reverseList(current)
    // printList(current)

    // let oldNext = current.next
    // current.next = e


};


/* Test Cases */

reorderList(list)