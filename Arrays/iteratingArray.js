const numbers = [1,2,3];

numbers.forEach(function (number){
    console.log(number);
})

//modifying using arrow function
numbers.forEach ((number,index) =>
    console.log(index,number));

//Joining Array

const joined = numbers.join(',');
console.log(joined)


const msg = 'This is';
const parts = msg.split(' ');
console.log(parts);

console.log(parts.join('-'));