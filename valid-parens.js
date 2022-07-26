/**
 * @param {string} s
 * @return {boolean}
 */

const braceRelations = {
    "}": "{",
    ")": "(",
    "]": "["
}
const openers = new Set(Object.values(braceRelations))
const closers = new Set(Object.keys(braceRelations))

 var isValid = function(s) {

    let bracketTally = []
    
    for(let i = 0; i < s.length; i++) {
        item = s[i]

        if (openers.has(item)) {
            bracketTally.unshift(item)
        }

        if(closers.has(item)) {
            if(bracketTally[0] === braceRelations[item]) {
                bracketTally.shift()
            } else if(bracketTally[0] !== braceRelations[item]) {
                return false
            }
        }
    }
    if(bracketTally.length > 0) return false
    return true
    
};

console.log(isValid("()[{}"))