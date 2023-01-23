/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 
This is using the stack method
There is another version of this problem in /two-pointers
*/
var backspaceCompare = function (s, t) {
    const removeBackspaces = str => {
        const wordStack = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                wordStack.pop()
            } else {
                wordStack.push(str[i])
            }
        }
        return wordStack
    }
    stringS = removeBackspaces(s).join("")
    stringT = removeBackspaces(t).join("")
    if(stringS === stringT) {
        return true
    } else return false
};

// Test cases

const s1 = "ab#c"
const t1 = "ad#c"

const s2 = "ab##"
const t2 = "c#d#"

const s3 = "a#c"
const t3 = "b"

const s4 = "xywrrmp"
const t4 = "xywrrmu#p"

const s5 = "bxj##tw"
const t5 = "bxj###tw"

const s6 = "bbbextm"
const t6 = "bbb#extm"

function truthy(s, t) {
    console.log("~~~")
    console.log("CASE:", s, t)
    if (backspaceCompare(s, t) !== true) {
        console.error("ERROR Expected true got", backspaceCompare(s, t))
    } else {
        console.log(`Correct, expected ${backspaceCompare(s, t)}, got ${backspaceCompare(s, t)}`)
    }
}

function falsy(s, t) {
    console.log("~~~")
    console.log("CASE:", s, t)
    if (backspaceCompare(s, t) !== false) {
        console.error("ERROR Expected false got", backspaceCompare(s, t))
    } else {
        console.log(`Correct, expected ${backspaceCompare(s, t)}, got ${backspaceCompare(s, t)}`)
    }
}


truthy(s1, t1)
truthy(s2, t2)
falsy(s3, t3)
truthy(s4, t4)
falsy(s5, t5)
falsy(s6, t6)

console.log("--------- END TESTS --------")