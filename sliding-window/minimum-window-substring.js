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
    let variety = Number.MAX_SAFE_INTEGER
    let start = 0
    let end = 0
    let minLength = Number.MAX_SAFE_INTEGER

    while (end < s.length) {
        const letter = s[end]

        if (letter in mustHaves) {
            if (letter in current === false) {
                current[letter] = 0
            }
            if (current[letter] === 0) {
                variety++
            }
            current[letter]++
        }

        if(variety === mustHaveVariety) {
            minLength = Math.min(minLength, (end - start + 1))
            console.log({start}, {end})
            break
        }

        end++
    }



    console.log(current)
};

const s1 = "ADOBECODEBANC"
const t1 = "ABC"

minWindow(s1, t1)