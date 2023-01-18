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

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)

// helper function to see list

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

/********************************************* */

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

const splitAndReverseSecondHalf = ll => {
    let fast = ll
    let slow = ll

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let oldNext = slow.next
    slow.next = null
    return reverseList(oldNext)
}


var reorderList = function (head) {
    let current = head
    let reverse = splitAndReverseSecondHalf(head)

    while (reverse !== null) {
        let oldNext = current.next
        current.next = new ListNode(reverse.val)
        reverse = reverse.next
        current.next.next = oldNext
        current = current.next.next
    }

    printList(head)
    return head
};


/* Test Cases */

reorderList(list)