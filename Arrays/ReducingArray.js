const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers){
    sum += n;
}
console.log(sum);

const summ = numbers.reduce((accumulator,currentvalue) => {
    return accumulator + currentvalue;

},0); // here 0 is for  accumulator = 0 if we didnt set this accucmulator will be 1st element
// and current value starts from the 2nd element 
// when it sets to 0 the current current value sets from 1st element ans accumulator a =0 
console.log(summ);