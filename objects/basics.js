const circle = {
    radius : 1,
    location :{
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

//FACTORY functions
//Camel Notation
function createCircle(radius, location){
    return{
    radius, //radius: radius or radius --> both are same
    location :location,
    isVisible: true,
    // function:draw() can be written as draw(){}
    draw(){ 
        console.log('draw');
    }
};
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();



//CONSTRUCTOR Functions
//Pascal Notation : first letter for every word must be capital


function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
} 

const circl = new Circle(1);
console.log(circl);

