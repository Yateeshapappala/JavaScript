const circle={
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key, circle[key]) // gives all the properties and its values
}

// for(let key of circle){
//     console.log(key);
// }
//it gives error as of can be used only for array whuch can be iterable
// circle is not iterable / object is not iterable

for (let key of Object.keys(circle))  //with this method objects.keys return an array
    console.log(key);

    if('radius' in circle)console.log('yes');