/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) {
        console.log("aint gonna fit")
        return ""
    }

    const mustHaves = {}
    for (let i = 0; i < t.length; i++) {
        if (t[i] in mustHaves === false) {
            mustHaves[t[i]] = 0
        }
        mustHaves[t[i]]++
    }

    const current = {}
    let numOfLetters = 0
    let start = 0
    let end = 0
    let minLength = [Number.MAX_SAFE_INTEGER, start, end]

    while (end < s.length) {
        const letter = s[end]

        if (letter in mustHaves) {
            if (letter in current === false) {
                current[letter] = 0
            } 
            current[letter]++
            if (current[letter] <= mustHaves[letter]) {
                numOfLetters++
            }
        }

        while (numOfLetters >= t.length) {
            if (numOfLetters === t.length) {

                if (end - start + 1 < minLength[0]) {
                    minLength = [end - start + 1, start, end]
                }

            }
                if (s[start] in mustHaves) {
                    if (current[s[start]] > 0) {
                        current[s[start]]--
                    }
                    if(current[s[start]] < mustHaves[s[start]])
                    numOfLetters--
                }
                start++
        }
        if(start === 0 && end === s.length - 1 && numOfLetters < t.length) {
            console.log("the end and no dice")
            return ""
        }
        end++
    }

    const minString = s.slice(minLength[1], minLength[2] + 1)
    console.log("SOLUTION:", { minString })
    return minString

};

const s1 = "ADOBECODEBANC"
const t1 = "ABC"

minWindow(s1, t1)

const s2 = "a"
const t2 = "a"

minWindow(s2, t2)

const s3 = "a"
const t3 = "aa"

minWindow(s3, t3)

const s4 = "a"
const t4 = "b"

minWindow(s4, t4)

const s5 = "aa"
const t5 = "aa"

minWindow(s5, t5)

const s6 = "bba"
const t6 = "ab"

minWindow(s6, t6)

const s7 = "babb"
const t7 = "baba"

minWindow(s7, t7)