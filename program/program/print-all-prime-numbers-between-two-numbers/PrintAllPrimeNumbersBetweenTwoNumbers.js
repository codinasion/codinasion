function primeNumbersBetweenTwoNumbers(startNum, endNum){
    console.log(`Prime number between ${startNum} and ${endNum}`);
    for(let i = startNum; i <= endNum; i++){
        let isNumDivisible = false;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isNumDivisible = true;
                break;
            }
        }
        if( i > 1 && !isNumDivisible){
            console.log(i);
        }
    }
}

primeNumbersBetweenTwoNumbers(2,10);