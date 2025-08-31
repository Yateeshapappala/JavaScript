const numbers = [2,3,1];
numbers.sort();
console.log(numbers);


numbers.reverse();
console.log(numbers);


const courses = [
    { id: 1 , name : 'Node.js'},
    {id : 2, name : 'JavaScript'}
]
courses.sort();
console.log(courses);
courses.sort(function(a,b){

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    // As here it checks the ASCII values so we have to compare with same case otherwise it gives differently
  if (a.name < b.name) return -1;
  if ( a.name > b.name) return 1;
  return 0;
});

console.log(courses);