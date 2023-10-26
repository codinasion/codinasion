// program to find the sum of digits of a number
let sumOfDigits (n: int) =
    let mutable number = n
    let mutable digitSum = 0
    while number > 0 do
        let digit = number % 10
        digitSum <- digitSum + digit
        number <- number / 10
    digitSum

// Example usage:
let number = 123
let result = sumOfDigits number
printfn "%d" result
