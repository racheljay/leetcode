/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sorted = nums.sort((a, b) => a - b)

    console.log(sorted)
    const solution = []

    for (let i = 0; i < nums.length - 2; i++) {

        let start = i + 1
        let end = nums.length - 1

        const sum = nums[i] + nums[start] + nums[end]
        while (start < end) {
            console.log(sum)
         
            if (sum === 0) {
                solution.push([nums[i], nums[start], nums[end]])
                start++
                end--
            
            } else if (sum < 0) {
                start++
            } else {
                end--
            }
        }
    }
    console.log(solution)
    return solution

};

const arr1 = [-1, 0, 1, 2, -1, -4]
const arr2 = [0,0,0,0]

threeSum(arr2)