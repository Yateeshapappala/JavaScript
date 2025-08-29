showPrime(20);

function showPrime(limit){
    for (let i = 2 ; i <= limit; i++){
        isPrime = true;
        for (let j = 2; j < i; j++){
        if ( i % j == 0){
            isPrime = false;
            break;
        }
    }
    // we can create seperate function for above claculation
    if(isPrime){
        console.log(i);
    }
    }

}