function squareDigit(str) {
    // split string
    // loop through it
    // convert to number and square and join back
        let arr = [];
        for(let arrayElement of str){
            let sum = 0;
            sum = +arrayElement;
            arr.push(sum)
        
        }
        console.log(arr)
        const squareNumber = arr.map(curr =>{
            const square = Math.pow(curr,2)
            return square
        }).join('')
        
    console.log(squareNumber)
    return squareNumber
    }
    squareDigit('9119')
  module.exports =squareDigit
node