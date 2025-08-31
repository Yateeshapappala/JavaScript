let numbers = [1,2,3,4];
let another = numbers;

// method 1
// numbers =[]

// method 2
// numbers.length = 0;

//above 2 methods are best to use


// method 3
// numbers.splice(0,numbers.length);

//method 4
while(numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);