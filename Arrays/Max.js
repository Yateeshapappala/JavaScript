const numbers = [1,2,3,4];
const max = maxNum(numbers);
console.log(max);

// function maxNum(array){
//     if(array.length === 0)
//         return undefined;
//     let m = array[0];
//     for(let i of array)
//         if (m < i )
//             m = i;

//     return m;

// }


function maxNum(array){
    if(array.length === 0)
        return undefined;

    return array.reduce((accumulator,current) =>{
        if(current > accumulator) return current;
        return accumulator;
    },0)

}