/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 
This is using the two pointers method
There is another version of this problem in /stack
*/
var backspaceCompare = function (s, t) {
    let sIndex = s.length - 1
    let tIndex = t.length - 1

    let sHash = 0
    let tHash = 0

    // use or so that the loop doesn't end when one reaches the end
    while (sIndex >= 0 || tIndex >= 0) {
        // internal loops to handle hashes 
        while (sIndex >= 0) {
            if (s[sIndex] === "#") {
                sHash++
                sIndex--
            } else if (sHash > 0) {
                sHash--
                sIndex--
            } else break
        }
        while (tIndex >= 0) {
            if (t[tIndex] === "#") {
                tHash++
                tIndex--
            } else if (tHash > 0) {
                tHash--
                tIndex--
            } else break
        }
        // genuine mis-match fail case
        if (s[sIndex] !== t[tIndex] && sHash === 0 && tHash === 0) {
            return false
        }
        // one has reached the end and the other is not there
        // only works because we are in a loop using or
        if ((sIndex >= 0) !== (tIndex >= 0)) {
            return false
        }
        sIndex--
        tIndex--
    }
    return true
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