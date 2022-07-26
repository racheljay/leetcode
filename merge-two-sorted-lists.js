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

const newList = []
 var mergeTwoLists = function(list1, list2) {

    const first = list1
    const second = list2
    if(list1.length === 0 && list2.length === 0) return []
    if(list1.length === 0 && list2.length > 0) return list2
    if(list2.length === 0 && list1.length > 0) return list1


    if(first[0] === second[0]) {
        newList.push(first[0])
        newList.push(second[0])
        first.shift()
        second.shift()
        mergeTwoLists(first, second)
    }
    if(first[0] < second[0]) {
        newList.push(first[0])
        first.shift()
        mergeTwoLists(first, second)
    }
    if(first[0] > second[0]) {
        newList.push(second[0])
        second.shift()
        mergeTwoLists(first, second)
    }

    console.log(newList)
    return newList


};

mergeTwoLists([1, 2, 4], [1, 3, 4])