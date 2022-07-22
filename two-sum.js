/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 function twoSum(nums, target) {
    const sorted = nums.sort((a, b) => a - b)
    // const compareIndex = 0
    
    // we only want viable candidates
    const filtered = []
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] < target) {
            filtered.push(sorted[i])
        }
    }
    console.log(filtered)


    let search = 0
    let comparison = 0

    while(i < filtered.length) {
        
    }
    // for(let i = 0; i < filtered.length; i++) {
    //     comparison = filtered[i]
    //     search = target - comparison
    //     if (filtered.includes(search)) {
    //         console.log(comparison, search)
    //     }
    // }
};

twoSum([2,7,11,15], 9)
// [3,2,4], target = 6
// [3,3], target = 6