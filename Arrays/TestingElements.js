const numbers = [1,2,3,-1];

// const allPositive = numbers.every( ///here every function used to check every element in the array
//     function(value){
//     return value >= 0;
// }
// )
const allPositive = numbers.every((value) => value>=0);

//here once it gets < 0 value it terminates and gives the false 

console.log(allPositive);


const somePositve = numbers.some( ///here some function used to check whether atleast one element in the array
    function(value){
    return value >= 0;
}
)
console.log(somePositve);
//when one gets the positive(criteria or condition) value it retuns the true