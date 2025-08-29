const movie = {
    title:  'a',
    release: 20,
};
showProperties(movie);
function showProperties(obj){
for (let key in obj){
    if(typeof obj[key] === 'string')
        console.log(key, obj[key]);
}
}