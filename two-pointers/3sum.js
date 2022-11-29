/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    console.log(nums)

    const solution = []

    for (let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue

        let start = i + 1
        let end = nums.length - 1

        while (start < end) {
         
            if (nums[i] + nums[start] + nums[end] === 0) {
                solution.push([nums[i], nums[start], nums[end]])
                start++
                end--
                while(start < end && nums[start] === nums[start - 1]) {
                    start++
                }
                while(start < end && nums[end] === nums[end + 1]) {
                    end--
                }
            
            } else if (nums[i] + nums[start] + nums[end] < 0) {
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
const arr3 = [1,-1,-1,0]
const arr4 = [-2,0,0,2,2]

threeSum(arr2)