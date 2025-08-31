const numbers =[ 1,2,3,4];


function includess(array,searchElement){
    for(let i of array)
        if(i === searchElement)
            return true;
    return false;
}

console.log(includess(numbers,3));
console.log(includess(numbers,6));