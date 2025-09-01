const numbers = [1,2,3,4,1];
try{
const count = countOccurences(numbers,1);
}
catch(e){
    console.log(e)
}
console.log(count);

function countOccurences(array, searchElement){
    if( !Array.isArray(array))
        throw new Error('Invalid array');

return array.reduce((accumulator,current) =>{
        const occurence = (current === searchElement) ? 1: 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;}, 0);

}