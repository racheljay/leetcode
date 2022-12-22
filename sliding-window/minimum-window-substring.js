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
    const mustHaveVariety = Object.keys(mustHaves).length

    const current = {}
    let numOfLetters = 0
    let start = 0
    let end = 0
    let minLength = [Number.MAX_SAFE_INTEGER, start, end]

    while (end < s.length) {
        const letter = s[end]

        if (letter in mustHaves) {
            console.log({ letter })
            if (letter in current === false) {
                current[letter] = 0
            }
            if (current[letter] === 0) {
                numOfLetters++
            }
            current[letter]++
        }

        while (numOfLetters >= mustHaveVariety) {
            if (numOfLetters === mustHaveVariety) {

                if (end - start + 1 < minLength[0]) {
                    minLength = [end - start + 1, start, end]
                }

                console.log({ start }, s[start], { end }, s[end])
                console.log({ numOfLetters }, { minLength })

            }
            if (s[start] in mustHaves) {
                if (current[s[start]] > 0) {
                    current[s[start]]--
                }
                if (current[s[start]] <= 0)
                    numOfLetters--
            }
            start++
        }
        end++
    }

    console.log(current)
    if (Object.keys(current).length === 0) {
        console.log("no match")
        return ""
    }
    const minString = s.slice(minLength[1], minLength[2] + 1)
    console.log("SOLUTION:", { minString })
    return minString

};

const s1 = "ADOBECODEBANC"
const t1 = "ABC"

// minWindow(s1, t1)

const s2 = "a"
const t2 = "a"

// minWindow(s2, t2)

const s3 = "a"
const t3 = "aa"

// minWindow(s3, t3)

const s4 = "a"
const t4 = "b"

// minWindow(s4, t4)

const s5 = "aa"
const t5 = "aa"

minWindow(s5, t5)