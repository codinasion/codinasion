// a function to calculate the sum of squares
let sumOfSquares numbers = 
    numbers
    |> List.map (fun x -> x * x) // Square each element
    |> List.sum                // Sum the squared elements

// Reads a list of numbers from the user
printfn "Enter a list of numbers separated by spaces:"
let input = System.Console.ReadLine()
let numbers = input.Split(' ') |> Array.toList |> List.map int

// Calculate and print the sum of squares
let result = sumOfSquares numbers
printfn "The sum of squares of the numbers is %d" result