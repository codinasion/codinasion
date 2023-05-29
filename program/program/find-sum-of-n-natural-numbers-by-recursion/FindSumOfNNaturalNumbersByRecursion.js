function sumOfNNaturalNumber(num) {
    let sumOfNaturalNum = 0;
    if(num > 0) {
        sumOfNaturalNum = num + sumOfNNaturalNumber(num - 1);
    }
    return sumOfNaturalNum;
}

console.log(sumOfNNaturalNumber(7));
