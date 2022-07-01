// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

        let arr=[1,2,3];
        function oddNumber(ele){
            return ele%2===1;
        }  
         let x=  arr.filter(oddNumber);

         console.log(x);
