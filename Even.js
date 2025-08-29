shownumbers(10);

function shownumbers(limit){
    for (let i=0 ; i <= limit ; i++){
        const message = (i%2 == 0) ? 'Even' : 'odd';
        console.log (i, message);
    }
}