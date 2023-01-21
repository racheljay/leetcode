/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = {}
    const indexes = []
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if(target - num in seen) {
            indexes.push(seen[target - num], i)
        } else {
            seen[num] = i
        }
    }
    return indexes
};