//function Declaration
function walk(){
    console.log('walk');
}

//Function Expression
//here just like a variable we can set a variable
//but as the function are objects setting a variable run 
//means setting it to a object
//named function Expression
//let run = function walk(){};
let run = function(){ // Anonymous Function
    console.log('run');
};
let move = run;
move();
run();