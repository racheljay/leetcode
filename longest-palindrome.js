/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    
    let letterStorage = {}
    
    // build an object to store letters and their frequency
    for(let i = 0; i < s.length; i++) {
        let count = 0
        let item = s[i]
        
        if(item in letterStorage === false) {
            letterStorage[item] = count + 1
        } else if(item in letterStorage) {
            letterStorage[item] = letterStorage[item] + 1
        }
    }
    
    // calculate max length with the provided letters
    
    const letters = Object.keys(letterStorage)
    
    // console.log(letters)
    let maxLength = 0
    let oddEncountered = false
    
    for(let i = 0; i < letters.length; i++) {
        let letter = letters[i]
        if(letterStorage[letter] % 2 === 0) {
            maxLength = maxLength + letterStorage[letter]
        } else {
            if(!oddEncountered) {
                maxLength = maxLength + letterStorage[letter]
                oddEncountered = true
            } else {
                maxLength = maxLength + (letterStorage[letter] - 1)
            }
        }
        
    }
    
    // console.log(letterStorage)
    console.log(maxLength)
    return maxLength
    
};