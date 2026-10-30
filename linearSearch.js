
function linearSearch(searchTerm, arr) {
    // bring back the first element that matches our searchTerm
    // console.log(searchTerm, arr)
    let result = undefined

    for(let i = 0 ; i <= arr.length; i++)  {
        // console.log(i)
        console.log(`Does ${arr[i]} === ${searchTerm} at idx: ${i}`)
        if (arr[i] === searchTerm) {
            console.log(arr[i])
            result = i
           
        }
    }
    return result;
}

function globalLinearSearch(searchTerm, arr) {
    let result = []

    for(let i = 0 ; i <= arr.length; i++)  {
        
        if (arr[i] === searchTerm) {
            result.push(i)
        }
    }
    console.log(result)
    return result;
}

// module.exports = { linearSearch};
// module.exports = { globalLinearSearch };
module.exports = { linearSearch, globalLinearSearch };

console.log(linearSearch(1, [1, 2, 3]))// 0
console.log(linearSearch(3, [1, 2, 3]))// 2
console.log(linearSearch(4, [1, 2, 3]))// undefined


globalLinearSearch('a', 'bananas'.split(''))//[1, 3, 5]

globalLinearSearch("s", "bananas".split(""))//[6]

globalLinearSearch("n", "bananas".split(""))//[2, 4]