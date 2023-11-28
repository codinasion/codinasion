let rec gcd a b =
    if b = 0 then a
    else gcd b (a % b)

// Example usage
let num1 = 12
let num2 = 18

let result = gcd num1 num2
printfn "The GCD of %d and %d is: %d" num1 num2 result
