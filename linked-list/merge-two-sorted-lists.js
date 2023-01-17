/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // edge cases
    if(list1 === null && list2 === null) return null
    if(list1 === null && list2 !== null) return list2
    if(list1 !== null && list2 === null) return list1
    
    console.log(list1.val)
    
    // insertion method
    const insertInOrder = (data) => {
        let current = list1
        
        while(current.next !== null) {
            // console.log("check check",current.val)
            if(current.val <= data && current.next.val >= data) {
                let oldNext = current.next
                current.next = new ListNode(data)
                current.next.next = oldNext
                return
            }
            current = current.next
        }
        // assuming that current.next is null
        // case for if the second list of numbers does not blend with the first list
        if(current.next === null && current.data !== null) {
            if(data >= current.val) {
                current.next = new ListNode(data)
                return
            }
        }
        if(list1.val <= data) {
            list1.next = new ListNode(data)
            return
        } else {
            let oldHead = list1
            let newHead = new ListNode(data)
            newHead.next = oldHead
            list1 = newHead
            return
        }
    }

    // merge method
    const mergeList = () => {
        let current = list2
        console.log(current)
        
        while(current.next !== null) {
            console.log(current.val)
            insertInOrder(current.val)
            current = current.next
        }
        insertInOrder(current.val)
    }
    mergeList()
    console.log(list1)
    return list1
    
};