function sumOfDigits (num: number): number {
    if(num < 10)
    {
        return num;
    }
    else
    {
        return num%10 + sumOfDigits(Math.floor(num/10));
    }
}

console.log("Sum of Digits -> 12345 is", sumOfDigits(12345))
