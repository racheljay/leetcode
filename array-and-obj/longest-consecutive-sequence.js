/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {

    // build set of all nums
    let numSet = new Set()
    for(let i = 0; i < nums.length; i++) {
        if(!numSet.has(nums[i])) {
            numSet.add(nums[i])
        }
    }
    
    let longestSequence = 0
    let currentSequence = 0
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        // check if num is the beginning of a sequence
        if(!numSet.has(num - 1)) {
            let numInSequence = num
            while(numSet.has(numInSequence)) {
                numInSequence++
                currentSequence++
            }
            longestSequence = Math.max(currentSequence, longestSequence)
            currentSequence = 0
        }
    }
    console.log(longestSequence)
    return longestSequence
    
};

const arr1 = [100,4,200,1,3,2]
const arr2 = [0,3,7,2,5,8,4,6,0,1]

longestConsecutive(arr2)