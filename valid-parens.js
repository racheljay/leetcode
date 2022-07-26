/**
 * @param {string} s
 * @return {boolean}
 */

const braceRelations = {
    "{": "}",
    "(": ")",
    "[": "]"
}
 var validParens = function(s) {
    
    // let parensOpen = false
    // let bracketOpen = false
    // let curlyOpen = false

    let lastOpened = []
    
    const isOpen = str => {
        if (str === "(" || str === "{" || str === "[") return true
        return false
    }

    const isClosed = str => {
        if (str === ")" || str === "}" || str === "]") return false
    }
    
    for(let i = 0; i < s.length; i++) {
        item = s[i]
        if(item === "(") {
            parensOpen = true
        } else if (item === "[") {
            bracketOpen = true
        } else if(item === "{") {
            curlyOpen = true
        } 


        if(item === ")"){
           if(bracketOpen || curlyOpen) {
            console.log("() error")
            return false
           } else {
            parensOpen = false
           }
        } else if(item === "]") {
            if(parensOpen || curlyOpen) {
                console.log("[] error")
                return false
            } else {
                bracketOpen = false
            }
        } else if(item === "}") {
            if(parensOpen || bracketOpen) {
                console.log("{} error")
                return false
            } else {
                curlyOpen = false
            }
        }
    }
    if(!parensOpen && !bracketOpen && !curlyOpen) return true
    // if(parens === 0 && bracket === 0 && curly === 0) {
    //     return true
    // }
    // return false
    
};

console.log(validParens("( [ ) ]"))