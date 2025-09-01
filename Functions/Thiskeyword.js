//method - obj
// function - global ,window object

//objects or method
const video = {
    title: 'a',
    play(){
        console.log(this); // here this reference to object itself so gives 
        //its properties
    }
};

video.stop = function(){
    console.log(this);// here also this refer to its object returns the propertie(anonymous function)
}
video.stop();



//regular Function
function playVideo(){
    console.log(this);
}
playVideo(); //return window object as it is function




function Video(title){
    this.title = title;
    console.log(this);
    //here it gives title as new operator creates a new object and sets this to point the object
}
const v = new Video('hi');