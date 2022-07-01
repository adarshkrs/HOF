// DOUBLING NUMBERS- HOF
// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let  arr=[1,2,3,4,5,6,7,8,9,10,11,12];
     
    function  DOUBLING(ele){
        return ele*2
    }
    let y=arr.map(DOUBLING)
    console.log(y);