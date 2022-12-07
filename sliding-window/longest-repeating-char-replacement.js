/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    const collection = {}
    let start = 0
    let length = 0
    let maxLength = 0
    let maxNum = 0

    for(let end = 0; end < s.length; end++) {
        if(s[end] in collection === false) {
            collection[s[end]] = 0
        }
        collection[s[end]]++

        if(collection[s[end]] > maxNum) {
            maxNum = collection[s[end]]
            currentMaxLetter = [s[end]]
        }

        let remainders = end - start + 1 - maxNum

        if(remainders > k) {
            collection[s[start]]--
            start++
        } else {
            length = end - start + 1
            maxLength = Math.max(maxLength, length)
        }
        
    }
    return maxLength
};

const string1 = "ABAB"
const string2 = "AABABBA" // should be 5

characterReplacement(string2, 2)