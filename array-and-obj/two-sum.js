/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    const visited = {}
    const cords = []
    

    for(i = 0; i < nums.length; i++) {
        const item = nums[i]
        const partner = target - item
        
        if (partner in visited) {
            cords.push(visited[partner])
            cords.push(i)
            break
            
        } else {
             visited[item] = i
        }
        
    }

     
        console.log(visited)
        console.log(cords)

};

twoSum([2,7,11,15], 9)