/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    let min = nums[0]

    while (left <= right) {
        /* 
        This part is the key that makes this different than basic binary search
        Because the array is rotated, if the left is ever less than right:
            * it will have just moved from the middle + 1
            * we only move the left if the middle was higher than the left
            * therefore we know left must now be the smallest number
            * this also works if our array turns out to not be sorted
        */
        if (nums[left] < nums[right]) {
            min = Math.min(min, nums[left])
            break
        }
        /** */
        let mid = Math.floor((left + right) / 2)

        min = Math.min(min, nums[mid])

        if (nums[mid] >= nums[left]) { // make sure >= not >
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return min
};