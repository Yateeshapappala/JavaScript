
function factory(street,city,zipcode) {
    return {
    street,
    city,
    zipcode
    };
}
const fac = new factory('a','b','c');
console.log(fac);

function Address(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode;
}

let address = new Address('a', 'b', 'c')
console.log (address);