/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let numberFrequency = {}
    let highest = 0
    let numString = ""
        
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i]
        
        if(number in numberFrequency) {
            numberFrequency[number] = numberFrequency[number] + 1
        
        } else {
            numberFrequency[number] = 1
        }
        
        if(numberFrequency[number] > highest) {
            highest = numberFrequency[number]
            numString = number
        }
    }
  
    
    console.log({highest}, {numString})
    return parseInt(numString)
    
};