function sumOfTwoSmallestNums(arr){
//  check for the min num
        
        const sortedArr = arr.sort((a, b) => {
            // console.log(a-b)
            return a-b
        })
        const add = sortedArr[0] + sortedArr[1];
        // console.log(add)
    return add

    

    // for (let i = 0; i < arr.length; i++){
    //     for (let j = 0; j < arr.length; i++){
    //         if (arr[i] < arr[j]) {
    //             // console.log(arr[i])
    //             console.log(`the other ${arr[j]}`)
    //         }
    //     }
    // }
    

}

sumOfTwoSmallestNums([19, 5, 42, 2, 77]);
// sumOfTwoSmallestNums([80, 33, 44, 55, 1, 2, 14]);
module.exports = sumOfTwoSmallestNums
