/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if(ransomNote.length > magazine.length) {
        return false
    }

    const cutUpMag = {}
    const lettersNeeded = {}

    let count = 0
    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransom[i]
        if (letter in lettersNeeded) {
            lettersNeeded[letter] = lettersNeeded[letter] + 1
        } else {
            lettersNeeded[letter] = count + 1
        }
    }
    for (let i = 0; i < magazine.length; i++) {
        const letter = magazine[i]
        if (letter in cutUpMag) {
            cutUpMag[letter] = cutUpMag[letter] + 1
        } else {
            cutUpMag[letter] = count + 1
        }
    }
    console.log({lettersNeeded})
    console.log({cutUpMag})
    const lettersINeed = Object.keys(lettersNeeded)
    console.log(lettersINeed)
    for (let i = 0; i < lettersINeed.length; i++) {
        const letter = lettersINeed[i]
        console.log(letter)

        if(letter in cutUpMag) {
            if(lettersNeeded[letter] > cutUpMag[letter]) {
                console.log(lettersNeeded[letter], cutUpMag[letter])
                console.log("letter is here but not enough")
                return false
            }
        } else {
            console.log("mag does not have letter")
            return false
        }
        
    }
    console.log("we're good")
    return true

};


const ransom = "fihjjjjei"
const mag = "hjibagacbhadfaefdjaeaebgi"
canConstruct(ransom, mag)