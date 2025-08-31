const numbers = arrayFromrange(1,4);
console.log(numbers);

function arrayFromrange(min, max){
    ans =[]
    for (let i=min ; i <= max ; i++){
        ans.push(i);
    }
 return ans;
} 