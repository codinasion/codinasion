function sumOfDigits (num) {
    if(num < 10)
    {
        return num;
    }
    else
    {
        return num%10 + sumOfDigits(Math.floor(num/10));
    }
}

sumOfDigits(12345);

console.log("Sum of Digits of sumOfDigits(12345) is", sumOfDigits(12345));
