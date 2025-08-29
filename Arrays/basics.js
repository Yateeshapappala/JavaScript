//Primitives
const numbers = [3,4,1]
console.log(numbers);

numbers.push(5); // end of array
console.log(numbers);

numbers.unshift(1); // beggining of array
console.log(numbers);

numbers.splice(2,0,'a','b');//in the middle of array
console.log(numbers);



console.log(numbers.indexOf(1)); //returns the index
console.log(numbers.indexOf(9));//return -1 if not present

console.log(numbers.lastIndexOf(1));// return the first index appears from the end of the array

console.log(numbers.includes(3));// return boolean value /check whether the value present or not

numbers.pop(); // ot removes element at the end of the array
console.log(numbers);

numbers.shift(); // it removes elemnt from beginning
console.log(numbers);

numbers.splice(2,2)// delets the two element from the index 2
console.log(numbers);



//REFERENCETYPES

const courses = [
    {id:1,name:'a'},
     {id:1,name:'a'},
]

console.log(courses.includes({id:1, name:'a'}))


const course =
courses.find(function(element){
    return element.name === 'a';
});
console.log(course);


const cours =
courses.findIndex(function(element){
    return element.name === 'a';
});
console.log(cours);