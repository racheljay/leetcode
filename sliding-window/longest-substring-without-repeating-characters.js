/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const letterStorage = {}
    let start = 0
    let maxLength = 0
    let currentLength = 0

    for (let i = 0; i < s.length; i++) {
        const letter = s[i]

        if (letter in letterStorage === false) {
            letterStorage[letter] = 0
        }
        letterStorage[letter]++

        if (letterStorage[letter] <= 1) {
            currentLength = i - start + 1
            maxLength = Math.max(maxLength, currentLength)
        }


        while (letterStorage[letter] > 1) {
            letterStorage[s[start]]--
            start++
        }
    }
    console.log(letterStorage)
    console.log(maxLength)
    return maxLength
};

const string1 = "abcabcbb"
const string2 = "bbbbb"
const string3 = "pwwkew"
const string4 = "nfpdmpi"

lengthOfLongestSubstring(string4)