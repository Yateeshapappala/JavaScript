const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
}

const another ={};
for (let key in circle)
    another[key] = circle[key];

console.log(another);

// above one is old method


const another1 = Object.assign({color:'yellow'},circle);

console.log(another1);


//simplest method 
const another3 = {...circle};
console.log(another3);