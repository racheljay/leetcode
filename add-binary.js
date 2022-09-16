/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    
    let longest = ""
    let shortest = ""
    let solution = []
    
    if(a.length >= b.length) {
        longest = a
        shortest = b
    } else {
        longest = b
        shortest = a
    }
    
    let longEnd = longest.length - 1
    let shortEnd = shortest.length - 1
    let remainder = 0
    
    while (longEnd >= 0) {
        if(shortEnd >= 0) {
            
            if(parseInt(longest[longEnd]) + parseInt(shortest[shortEnd]) + remainder === 3) {
                solution.unshift(1)
                remainder = 1
            } else if(parseInt(longest[longEnd]) + parseInt(shortest[shortEnd]) + remainder === 2) {
                solution.unshift(0)
                remainder = 1
            } else if(parseInt(longest[longEnd]) + parseInt(shortest[shortEnd]) + remainder === 1) {
                solution.unshift(1)
                remainder = 0
            } else if(parseInt(longest[longEnd]) + parseInt(shortest[shortEnd]) + remainder === 0) {
                solution.unshift(0)
                remainder = 0
            }
        } else {
            if(parseInt(longest[longEnd]) + remainder === 2) {
                solution.unshift(0)
                remainder = 1
            } else if(parseInt(longest[longEnd]) + remainder === 1) {
                solution.unshift(1)
                remainder = 0
            } else {
                solution.unshift(longest[longEnd])
            }
        }
        shortEnd--
        longEnd--
        
    }
    if(remainder === 1) {
        solution.unshift(1)
    }
    
    console.log(solution)
    return solution.join("")
    
};