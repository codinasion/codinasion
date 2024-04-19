open System

// Function to compute GCD using recursion
let rec gcd a b =
    if b = 0 then abs a
    else gcd b (a % b)

// Function to compute LCM using the GCD
let lcm a b =
    abs (a * b) / gcd a b

// Main function to handle input and output
[<EntryPoint>]
let main argv =
    Console.Write("Enter the first number: ")
    let num1 = Int32.Parse(Console.ReadLine())

    Console.Write("Enter the second number: ")
    let num2 = Int32.Parse(Console.ReadLine())

    let result = lcm num1 num2
    printfn "The LCM of %d and %d is %d" num1 num2 result
    0 // return an integer exit code
