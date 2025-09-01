const person = {
    firstname: 'Mosh',
    lastName: 'Ham',
    get fullname(){ //getter
        return `${person.firstname} ${person.lastName}`;
    },

    set fullname(value){ //setter
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastName  = parts [1];
    }
}
//getters - ACCESS properties
// setters - changes(mutate) them

console.log(person.fullname);
person.fullname = 'lap top';
console.log(person.fullname);