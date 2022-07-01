// Given an array of numbers find the sum of cubes if the number
//  is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)
    
     let arr=[1,2,3,4,5,6];
     function oddelement(ele){
        return ele%3===0
     }
     let x=arr.filter(oddelement)
        
     function oddCube(x){
        return x*x*x
     }
     let y=x.reduce(oddCube)
       function sum(a,b,c){
        return a+b+c;
       } 
       let z=x.filter(sum)
       console.log(z);
     