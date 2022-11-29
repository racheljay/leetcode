/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    if(s === t) return true
    
    let objS = {}
    let objT = {}
    
    for(i = 0; i < s.length; i++) {
        let itemS = s[i]
        let itemT = t[i]
        
        if(itemS in objS) {
            objS[itemS]++
        } else {
            objS[itemS] = 1
        }
        
         if(itemT in objT) {
            objT[itemT]++
        } else {
            objT[itemT] = 1
        }
    }
    
    const letters = Object.keys(objS)
    
    for(let i = 0; i < letters.length; i++) {
        let item = letters[i]
        
        if(objS[item] !== objT[item]) {
            return false
        }
    }
    return true
    
};