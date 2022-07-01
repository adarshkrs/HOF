// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24
         
let arr=[2,3,4];
    function productNumbers(p,e){
        return p*e;
    }
   let c= arr.reduce( productNumbers)
   console.log(c)