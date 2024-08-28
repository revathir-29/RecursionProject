function fib(num){
    let arr = [0,1];
    
    for(let i=2; i<num ; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

function fibRec(num){
    if(num ===1){
        return [0];
    }
    if(num ===2){
        return[0,1];
    }
    const fibArr = fibRec(num-1);
    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    
    return fibArr;
}
console.log(fib(8));
console.log(fibRec(8));