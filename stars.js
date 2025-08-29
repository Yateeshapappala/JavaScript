showstars(5);
function showstars(n){
    for ( let i = 0 ; i < n; i++){
        pattern = "";
        for (let j = 0; j <=i ;j++)
            pattern += "*";
        console.log(pattern);
    }
}