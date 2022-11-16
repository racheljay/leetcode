/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function(strs) {
    const array = []
    for(let i = 0; i < strs.length; i++) {
        if(i !== strs.length - 1) {
            array.push(strs[i], "ß")
        } else {
            array.push(strs[i])
        }
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
var decode = function(s) {
    console.log(s.split("ß"))
    return s.split("ß")
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */