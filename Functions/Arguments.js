function sum(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1,2,3,4,5,6,7));

//REST operator

function summ(...args){
    console.log(args);
}

summ(1,2,3,4);


//Reduce Method

function summm(...args){
    return args.reduce((a,b) => a+b );
}

console.log(summm(1,2,3,4,5,6));