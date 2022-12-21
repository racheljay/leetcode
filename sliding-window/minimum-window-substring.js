/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
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
    let minLength = Number.MAX_SAFE_INTEGER

    while (end < s.length) {
        const letter = s[end]

        if (letter in mustHaves) {
            console.log({letter})
            if (letter in current === false) {
                current[letter] = 0
            }
            if (current[letter] === 0) {
                numOfLetters++
            }
            current[letter]++
        }

        // TODO figure out how to shrink the window in a reasonable way while correct amount of letters are present
        // while(numOfLetters > mustHaveVariety) {
        //     if()
        // }

        if(numOfLetters === mustHaveVariety) {
            minLength = Math.min(minLength, (end - start + 1))
            console.log({start}, {end})
            console.log({numOfLetters}, {minLength})
            // break
            if(s[start] in mustHaves) {
                current[s[start]]--
                start++
                numOfLetters--
            }
        }

        end++
    }



    console.log(current)
};

const s1 = "ADOBECODEBANC"
const t1 = "ABC"

minWindow(s1, t1)