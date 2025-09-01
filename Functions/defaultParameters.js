function interst (principal, rate, years){
    rate = rate || 3.5;
    years = years ||5;
    return principal* rate/100 * years;
}

function interestt( principal, rate = 3.5, years = 5){
    return principal* rate/100 * years;
}

console.log(interst(1000));
console.log(interestt(1000));