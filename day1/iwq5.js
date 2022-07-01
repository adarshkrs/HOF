// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4


    let arr=[1,2,3,4];
      
      function oddSum(ele){
        return ele%2===1;
      }
      let out=arr.filter(oddSum)
       
      let y=out.reduce(sum)
      function sum(x,z){
        return x+z;
      }
      console.log(y);
        
    