/**
 * @param {string} s
 * @return {boolean}
 */

 var validParens = function(s) {
    
    let parens = 0
    let bracket = 0
    let curly = 0
    
    const isOpen = str => {
        if (str === "(" || str === "{" || str === "[") return true
        return false
    }
    
    for(let i = 0; i < s.length; i++) {
        item = s[i]
        if(item === "(") {
            parens++
        } else if (item === "[") {
            bracket++
        } else if(item === "{") {
            curly++
        } else if(item === ")"){
            parens--
        } else if(item === "]") {
            bracket--
        } else if(item === "}") {
            curly--
        }
    }
    
    if(parens === 0 && bracket === 0 && curly === 0) {
        return true
    }
    return false
    
};

validParens("([)]")