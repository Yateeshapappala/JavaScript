const first = [1,2,3];
const second = [4,5,6];

const combine = first.concat(second);

const slice = combine.slice(2,4);// returns array from index 2 to index 4(excluding 4) i.e. [2,4)
const slice2 = combine.slice();//returns original array
const slice3 = combine.slice(3);//returns array from index 3

console.log(combine);
console.log(slice);
console.log(slice2);
console.log(slice3);


//primitives copy in target array
//objects -> references are copied 
//imput and output refernce to same object
//objects

const first1 = [{id:1}];
const second1 = [4,5,6];


const combined = first1.concat(second1);
console.log(combined);
first1[0].id = 10;

console.log(combined);



//Spreading Operator

const combin = [...first,...second,'b']; //we can add new elemenets laso while combining using spread operator
console.log(combin);

const slic = [...combin]; //return the complete array
console.log(slic);

