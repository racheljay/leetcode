/**
 * @param {string} s
 * @return {boolean}
 */

const braceRelations = {
    "{": "}",
    "(": ")",
    "[": "]",
    "}": "{",
    ")": "(",
    "]": "["
}
 var validParens = function(s) {
    
    // let parensOpen = false
    // let bracketOpen = false
    // let curlyOpen = false

    let bracketTally = []
    
    const isOpen = str => {
        if (str === "(" || str === "{" || str === "[") return true
        return false
    }

    const isClosed = str => {
        if (str === ")" || str === "}" || str === "]") return true
    }
    
    for(let i = 0; i < s.length; i++) {
        item = s[i]

        if (isOpen(item)) {
            bracketTally.unshift(item)
        }

        if(isClosed(item)) {
            if(bracketTally[0] === braceRelations[item]) {
                bracketTally.shift()
            } else if(bracketTally[0] !== braceRelations[item]) {
                return false
            }
        }
    }
    if(bracketTally.length > 0) return false
    console.log(bracketTally)
    return true
    
};

console.log(validParens("([)]"))