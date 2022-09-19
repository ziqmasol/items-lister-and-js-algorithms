function sumOfMultiples(arr) {
    // const multiples = arr.filter(curr => {
    //     if (curr % 3 === 0 || curr % 5 === 0) {
    //         // console.log(curr)
    //         return curr
    //     }
    // }).reduce((acc, cur) => {
    //     return acc + cur;
        
    // } ,0)
    
    // console.log(multiples)

    let sum =0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
            sum += arr[i]
            // console.log(arr[i])
        }
    }
    // console.log(sum)
let sum2 =0
    for (let [i,j] of arr.entries()) {
        console.log(`this is ${i} and ${j}`)
        if (j % 3 === 0 || j % 5 === 0) {
            sum2 += j
        }
    }
    console.log(sum2)
}
module.exports = sumOfMultiples

sumOfMultiples([0, 3, 4, 5, 8, 9, 12, 15, 30]);
// sumOfMultiples([9, 3, 21, 30, 7, 8, 4, 2]);