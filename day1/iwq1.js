// Given an array of numbers print the square of those numbers

   let  arr=[1,2,3,4,5,6,7,8,9,10,11,12];
     function squareFind(ele){
        return ele*ele;
     }
    let x= arr.map(squareFind)
      
    console.log(x);