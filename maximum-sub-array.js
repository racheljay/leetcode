/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const findLargest = arr => {
        let highest = Number.MIN_SAFE_INTEGER
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > highest) highest = arr[i]
        }
        return highest
    }
    
    let highestPossible = []
    
    highestPossible.push(nums[0])
   
    
    for(let i = 1; i < nums.length; i++) {
        let lastHighest = highestPossible[highestPossible.length -1]
        let item = nums[i]
        console.log(item, lastHighest)
        if(item > item + lastHighest) {
            highestPossible.push(item)
        } else {
            highestPossible.push(item + lastHighest)
        }
    }
    
    console.log(highestPossible)
    return findLargest(highestPossible)
};