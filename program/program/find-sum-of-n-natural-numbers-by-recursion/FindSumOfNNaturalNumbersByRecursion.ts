function sumOfNNaturalNumber(num: number): number {
    let sumOfNaturalNum = 0;
    if(num > 0) {
        sumOfNaturalNum = num + sumOfNNaturalNumber(num - 1);
    }
    return sumOfNaturalNum;
}

console.log(sumOfNNaturalNumber(5));
