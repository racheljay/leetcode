/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parens = {
        "}": "{",
        "]": "[",
        ")": "("
    }

    const openBraces = []

    if(s.length % 2 !== 0) return false

    for(let i = 0; i < s.length; i++) {
        if(s[i] in parens === false) {
            openBraces.push(s[i])
        }
        if(s[i] in parens) {
            if(openBraces[openBraces.length - 1] === parens[s[i]]) {
                openBraces.pop()
            }
            else return false
        }  
    }
    console.log(openBraces)
    if(openBraces.length > 0) {
        return false
    } else return true


};