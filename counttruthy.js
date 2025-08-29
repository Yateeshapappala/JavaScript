const array = [1,2,0,''];
console.log(countTruthy(array));
function countTruthy(a){
        let count = 0;
        for (let value of array)
            if (value)
                count++;
        return count;
    }