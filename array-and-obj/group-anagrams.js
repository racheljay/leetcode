/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const numberFromWord = (word) => {
        let num = 1
        for (let letter = 0; letter < word.length; letter++) {
            num = num * word.charCodeAt(letter)
            // console.log(word.charCodeAt(letter))
        }
        // console.log(num)
        return num
    }

    const anagrams = {}

    for (let i = 0; i < strs.length; i++) {
        const wordNum = numberFromWord(strs[i])

        if (wordNum in anagrams === false) {
            anagrams[wordNum] = [strs[i]]
        } 
        else if (wordNum in anagrams) {
            anagrams[wordNum].push(strs[i])
        }
    }

    console.log(anagrams)
    return Object.keys(anagrams)
};

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
const arr2 = ["nozzle","punjabi","waterlogged","imprison","crux","numismatists","sultans","rambles","deprecating","aware","outfield","marlborough","guardrooms","roast","wattage","shortcuts","confidential","reprint","foxtrot","dispossession","floodgate","unfriendliest","semimonthlies","dwellers","walkways","wastrels","dippers","engrossing","undertakings","unforeseen","oscilloscopes","pioneers","geller","neglects","cultivates","mantegna","elicit","couriered","shielded","shrew","heartening","lucks","teammates","jewishness","documentaries","subliming","sultan","redo","recopy","flippancy","rothko","conductor","e","carolingian","outmanoeuvres","gewgaw","saki","sarah","snooping","hakka","highness","mewling","spender","blockhead","detonated","cognac","congaing","prissy","loathes","bluebell","involuntary","aping","sadly","jiving","buffalo","chided","instalment","boon","ashikaga","enigmas","recommenced","snell","parsley","buns","abracadabra","forewomen","persecuted","carsick","janitorial","neonate"]
groupAnagrams(arr2)