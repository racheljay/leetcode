/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
    const array = []
    for (let i = 0; i < strs.length; i++) {
        const hash = (strs[i].length).toString() + "&"
        array.push(hash, strs[i])
    }
    console.log(array.join(""))
    return array.join("")
};

const isIntString = char => {
    if (!char) return false
    if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        return true
    }
    return false
}
/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    const solution = []
    let i = 0
    let numString = ""

    while (i < s.length) {
        if (isIntString(s[i])) {
            numString = numString + s[i]
            i++
        }
        if (s[i] === "&" && numString !== "") {
            const wordLength = parseInt(numString)
            const word = s.slice(i + 1, wordLength + i + 1)
            solution.push(word)
            numString = ""
            if(i + wordLength + 1 < s.length) {
                i = i + wordLength + 1
            } else {
                break
            }
        }
    }
    console.log({solution})
    return solution
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/*
    Function Call
*/

const array = ["Hello", "World"]
const array2 = ["YeyrQ$&*2"]
const array3 = ["q?6?^7z5*", "2_`Gw+", "_D4-.3", "-z5PU2="]
const array4 = ["", ""]
const array5 = ["!=ts-aNs", "T!904l", "", "*j~{J.#X"]
const array6 = ["57k:p`lJ", "rDJc&IT", "TuWC"]
const array7 = ["`Ejy7", "mjax", "Z vcCvs"]

const encoded = encode(array7)
decode(encoded)