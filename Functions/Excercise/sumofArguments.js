// function sum(...args){
//     let sum = 0;
//     for( let i of arguments){
//         sum += i;
//     }
//     return sum;
// }
console.log(sum(1,2,3,4));


// using reduce function
function sum(...args){
    if(args.length === 1 && Array.isArray(args[0]))
        args =[...args[0]]; // to check whether th given argument is single array 
    //if it is by using spread operator converting to args array

    return args.reduce((a,b) => a+b);
}

console.log(sum([1,2,3]));