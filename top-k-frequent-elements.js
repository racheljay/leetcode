/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const numFrequency = {}
    
    // store numbers in obj
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in numFrequency === false) {
            numFrequency[nums[i]] = 0
        }
        numFrequency[nums[i]] += 1
    }
    
    // the frequency of a number is reffered to as index
    // number is added to array at that index
    const indexingArray = Array(nums.length + 1)
    const keys = Object.keys(numFrequency)
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if(!indexingArray[numFrequency[key]]) {
            indexingArray[numFrequency[key]] = []
        }
        indexingArray[numFrequency[key]].push(key)
    }
    console.log(numFrequency, indexingArray)
    
    const solution = []
    
    for(let i = indexingArray.length; i > 0; i--) {
        if(indexingArray[i]) {
            for(let j = 0; j < indexingArray[i].length; j++) {
                solution.push(indexingArray[i][j])
                if(solution.length === k) return solution
            }
        }
    }
};