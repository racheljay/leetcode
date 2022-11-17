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

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    const solution = []

    const isIntString = char => {
        if (!char) return false
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
            return true
        }
        return false
    }

    let num = ""
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if ((isIntString(char) && s[i + 1] === "&") ) {
            num = num + char
            console.log({ num }, parseInt(num))
            continue
        } else if (!isIntString(char) && char !== "&" && num !== "") {
            num = ""
        } else if (char === "&" && isIntString(s[i - 1])) {
            if (s[i - 1] === "0") {
                solution.push("")
                num = ""
                continue
            } else {
                console.log("ampersand", num)
                const word = s.slice((i + 1), (i + parseInt(num) + 1))
                console.log({ word })
                solution.push(word)
                num = ""
            }
        }
    }
    console.log({ solution })
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
const array7 = ["`Ejy7","mjax","Z vcCvs"]

const encoded = encode(array7)
decode(encoded)