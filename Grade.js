const marks = [80,80,50];

console.log(calculategrade(marks));

function calculategrade(marks){
    let sum = 0;
    for (let mark of marks)
        sum += mark;
     let avg = sum / marks.length; 
     // this calculaton can be done using another function only for average

     if (avg <60) return 'F';
     if (avg < 70) return 'D';
     if(avg < 80) return 'C';
     if (avg < 90) return 'D';
     return 'A';
}