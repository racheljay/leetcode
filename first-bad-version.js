/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
   
        // binary search of previous versions
        
        let left = 0
        let right = n
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            let leftOfMid = (mid - 1) < 0 ? null : mid - 1
            
            if(isBadVersion(mid) === true && (leftOfMid === null || isBadVersion(leftOfMid) === false)) {
                console.log(mid)
                return mid
            } else if (isBadVersion(mid) === false) {
                left = mid + 1     
            } else {
                 right = mid - 1
            }
        }
    };
};