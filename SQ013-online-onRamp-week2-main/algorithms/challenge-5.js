function accum(str) {
    // Implement the function accum(str) that takes string and returns the accumulated string by index.
    // The parameter of accum is a string which includes only letters from a..z and A..Z.
    // # Example
    //    accum("abcd") -> "A-Bb-Ccc-Dddd"
    //    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
    let arr = '';
        let arr2 = '';
        // let arr2 = '';0
        for(let i =0; i<str.length; i++){
            arr2 = str[i].toUpperCase();
            arr +=`${arr2} ${str[i].repeat(i + 1).slice(1).padEnd(i+2 , '_')}`;

        }
        console.log(arr.trim())
    
    
        

}
 accum('salam')
 accum('salamquadriishola')

  module.exports =accum