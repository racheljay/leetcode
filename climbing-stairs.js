/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    const numOfStairs = (current, lastStep, memo) => {
   
        if(current > lastStep) {
            // this has failed
            return 0
        }
        if(current === lastStep) {
            // bingo
            return 1
        }
        // add memoziation method for increased speed
        if(memo[current] > 0) {
            return memo[current]
        }
        memo[current] = numOfStairs(current + 1, lastStep, memo) + numOfStairs(current + 2, lastStep, memo)
  
        return memo[current]
    }
    
    return numOfStairs(0, n, [])
    
};

// console.log(climbStairs(100))
climbStairs(10)