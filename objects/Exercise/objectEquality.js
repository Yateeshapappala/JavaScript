function Address(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode;
}

let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

function areEqual(address1,address2){
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode;

}
//here both the values are same so returns true

function areSame(address1, address2){
    return address1 === address2;
// both the objects are not same so returns false
}

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));