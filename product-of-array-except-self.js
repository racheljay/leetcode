/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    
    const output = Array(nums.length)
    let prefixTotal = 1
    let postfixTotal = 1
    
    // finding prefixes from left to right
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            output[i] = 1
        } else {
            prefixTotal = prefixTotal * nums[i - 1]
            output[i] = prefixTotal
        }  
    }
    
    // find the postfixes right to left and multiply by the prefix
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) {
            output[nums.length - 1] = prefixTotal
        } else {
            postfixTotal = postfixTotal * nums[i + 1]
            // const tempPrefix = output[i]
            output[i] = output[i] * postfixTotal
        }
    }
    
    console.log(output)
    return output
};