const person = {
    firstname: 'Mosh',
    lastName: 'Ham',
    set fullName(value){
        if ( typeof value !== 'string') 
            throw new Error('Value is not String'); //throws an Exception

        const parts = value.split(' ');
        if ( parts.length !==2)
            throw new Error('Enter a first and last name');

        this.firstname = parts[0];
        this.lastName  = parts [1];
    }
}
try { 
person.fullName = '';
}
catch(e){
    console.log(e);
}
console.log(person.fullName);
// when we throw an exception, the lines after the throw Statement
// are not executed, will jump out of this method and the control will
// move to catch block .And thus the exception can be seen(catch) and we can do something with it