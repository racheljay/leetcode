/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

/*
    Image: the full multidimensional array that we are working with
    sr: index of the top level array (row)
    sc: index of the number in the nested array (column)
    color: the new number that will override all of the touching and related numbers
*/
var floodFill = function (image, sr, sc, color) {

    const visualizeImage = image => {
        for (let i = 0; i < image.length; i++) {
            let subArr = image[i]
            let rowStr = ""
            for (let j = 0; j < subArr.length; j++) {
                if (j !== subArr.length - 1) {
                    rowStr = rowStr + subArr[j] + " | "
                } else {
                    rowStr = rowStr + subArr[j]
                }
            }
            console.log(rowStr)
        }
    }

    const findNeighborsAndConvert = (image, sr, sc, color) => {
        
        const target = image[sr][sc]

        if(target === color) {
            console.log("already did it")
            return image
        }
        let firstRow = image[0]

        if(sr > image.length -1 || sc > firstRow.length - 1) {
            console.log("coordinate too high")
            return null
        } else if (sr < 0 || sc < 0) {
            console.log("coordinate too low")
            return null
        }

        const upper = sr === 0 ? null : image[sr - 1][sc]
        const lower = sr >= image.length - 1 ? null : image[sr + 1][sc]
        const left = sc === 0 ? null : image[sr][sc - 1]
        const right = sc >= firstRow.length - 1 ? null : image[sr][sc + 1]

        console.log({ target, upper, lower, left, right })

        image[sr][sc] = color
        if(upper === target) {
            findNeighborsAndConvert(image, sr - 1, sc, color)
        }
        if(lower === target) {
            findNeighborsAndConvert(image, sr + 1, sc, color)
        }
        if(left === target) {
            findNeighborsAndConvert(image, sr, sc - 1, color)
        }
        if(right === target) {
            findNeighborsAndConvert(image, sr, sc + 1, color)
        }
        visualizeImage(image)
        console.log(image)
    }

    findNeighborsAndConvert(array, 1, 0, 2)

};

// const array = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
const array = [[0,0,0],[0,0,0]]
floodFill(array)