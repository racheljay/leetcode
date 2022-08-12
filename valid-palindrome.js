/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if(s.length === 1) return true
    // if(s === " ") return true
    
    // get rid of spaces and make all letters lowercase
    const noSpaces = s.split(' ').join("").toLowerCase()
 
    // clean up string into more workable array
    const arr = []

    for(i in noSpaces) {
        // check for lower case letters
        if(noSpaces.charCodeAt(i) >= 97 && noSpaces.charCodeAt(i) <= 122) {
            arr.push(noSpaces[i])
        // check for number strings
        } else if(noSpaces.charCodeAt(i) >= 48 && noSpaces.charCodeAt(i) <= 57) {
            arr.push(noSpaces[i])
        }
    }
    
    if(arr.length <= 1) return true
    
    // check for palindrome
    for(let i = 0; i < arr.length; i++) {
        let index = i
        let reverseIndex = (arr.length - i) -1
    
        if(arr[index] !== arr[reverseIndex]) {
            return false
        } else if (index > reverseIndex) {
            return true
        }
    }
};