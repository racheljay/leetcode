/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const letterStorage = {}
    let start = 0
    let maxLength = 0
    let currentLength = 0

    for(let i = 0; i < s.length; i++) {
        const letter = s[i]

        if(letter in letterStorage === false) {
            letterStorage[letter] = 0
        }
        letterStorage[letter]++
        currentLength = i - start
        
        maxLength = (maxLength, currentLength)

        if(letterStorage[letter] > 1) {
            letterStorage[letter]--
            start++
        }
    }
    console.log(letterStorage)
    console.log(maxLength)
};

const string1 = "abcabcbb"
const string2 = "bbbbb"
const string3 = "pwwkew"

lengthOfLongestSubstring(string3)