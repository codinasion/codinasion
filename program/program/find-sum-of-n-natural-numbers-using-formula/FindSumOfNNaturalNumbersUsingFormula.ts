const FindSumOfNNaturalNumbersUsingFormula = (n: number): number => {
    const sum: number = (n * (n + 1)) / 2;
    //console.log(sum)
    return sum;
}
console.log(FindSumOfNNaturalNumbersUsingFormula(5));
export default FindSumOfNNaturalNumbersUsingFormula;