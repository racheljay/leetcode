/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = []
    const result = []

    const recurse = (open, closed) => {
        if (open === closed && open === n) {
            result.push(stack.join(''))
            return
        }

        if (open < n) {
            stack.push("(")
            recurse(open + 1, closed)
            // reset what we just did for the next recursion
            stack.pop()
        }

        if (closed < open) {
            stack.push(")")
            recurse(open, closed + 1)
            stack.pop()
        }
    }

    // recursion starts down here
    recurse(0, 0)
    return result
};