const numbers = [1, -1, 2, 3];

//filter() return only the values which staisfies the given condition
const filteredNumbers = numbers.filter(function(value){
    return value >= 0;
})

console.log(filteredNumbers);


//Arrow Function
const filteredNum = numbers.filter((value) => 
    value >= 0 );

console.log(filteredNum);