const output = fizzBuzz(5);
console.log(output);
function fizzBuzz(input){
    if (typeof input !== 'number')
        return 'not a number';
    if(input % 3 ===0){
        return 'fizz';
    }
    else if(input % 5 == 0){
        return 'Buzz'
    }
    else if( input % 5==0 && input % 3 == 0 ){
        return 'FizzBuzz';
    }
    return input;
    }