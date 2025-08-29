checkSpeed(200);
function checkSpeed(speed){
    const speedLimit = 70;
    const KMperPoint = 5;
   if(speed <= speedLimit)
    console.log('ok');
else{
    let point = Math.floor((speed - speedLimit)/5);
    if ( point >= 12)
        console.log('Licence susended');
    else
        console.log('points',point);
}
}