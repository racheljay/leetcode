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
    if (list1 === null && list2 === null) return null
    if (list1 === null && list2 !== null) return list2
    if (list2 === null && list1 !== null) return list1
    
    /* 
        make sure our first current iterative node is
        going to be smaller than the head of the one we're comparing to
    */
    let iterative, comparative
    if(list1.val > list2.val) {
        iterative = list2
        comparative = list1
    }
    if(list1.val <= list2.val) {
        iterative = list1
        comparative = list2
    }
    
    let current = iterative
    // let compare = comparative
    
    // console.log("next next val", iterative.next.next.val)
    
    // while (iterative.next !== null) {
        let oldNext = iterative.next
        // console.log(iterative.val, comparative.val)
        
        if(iterative.val >= comparative.val) {
            iterative.next = comparative.val
            iterative.next.next = oldNext
            // break
        }
        // iterative = iterative.next
  //  } 
    console.log(iterative.val)
    
    console.log(iterative)
//     let current = list1
//     let list2head = list2.val
//     while (current.next !== null) {
//         let oldnext = current.next
//         console.log(current.val)
        
//         if(list2head )
        
//         current = current.next
//     }
//     console.log(current.val)
    
//     let data2 = list2
//     while (data2.next !== null) {
//         console.log(data2.val)
//         data2 = data2.next
//     }
//     console.log(data2.val)
    
};