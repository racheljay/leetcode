/**
 * @param {number[]} nums
 * @return {number}
 */

/* second attempt solution */

 var maxSubArray = function(nums) {
    
    let current = nums[0]
    let maxTotal = current
    
    for(let i = 1; i < nums.length; i++) {
        let num = nums[i]
        
        if(num > num + current) {
            current = num
            console.log({current})
            if(current > maxTotal) maxTotal = current
        } else {
            current = num + current
            console.log({current})
            if(current > maxTotal) maxTotal = current
        }
    }
    return maxTotal
    
};

/* old solution */
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