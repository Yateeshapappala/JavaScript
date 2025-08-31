const numbers = [1,-1,2,3];

// Arrow Function
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map( function (value) {
    return '<li>'+ value + '</li>'
});
// above we map numbers to string

console.log(items);

const html = '<ul>' + items.join('') + '<ul>';
console.log(html);


//we can also map for objects also

//const item = filtered.map(n => {value:n}) // it gives [ undefined, undefined, undefined ]
const item = filtered.map(n => ({value:n}));
console.log(item);


//we can also combine to single line which is known as chaining
const itemss = numbers.
filter(n => n >= 0)
.map(n => ({value:n}));
console.log(itemss);
