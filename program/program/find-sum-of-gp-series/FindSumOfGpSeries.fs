open System

let sumOfGP (a: float) (r: float) (n: int) : float =
    if r = 1.0 then float n * a
    else a * (pown r n - 1.0) / (r - 1.0)

// Function to safely parse float values
let tryParseFloat (str: string) : Option<float> =
    match Double.TryParse(str) with
    | (true, value) -> Some value
    | _ -> None

// Function to safely parse int values
let tryParseInt (str: string) : Option<int> =
    match Int32.TryParse(str) with
    | (true, value) -> Some value
    | _ -> None

// Read inputs from user
printfn "Enter the first term (a):"
let a = 
    match Console.ReadLine() |> tryParseFloat with
    | Some value -> value
    | None -> failwith "Invalid input for the first term"

printfn "Enter the common ratio (r):"
let r = 
    match Console.ReadLine() |> tryParseFloat with
    | Some value -> value
    | None -> failwith "Invalid input for the common ratio"

printfn "Enter the number of terms (n):"
let n = 
    match Console.ReadLine() |> tryParseInt with
    | Some value -> value
    | None -> failwith "Invalid input for the number of terms"

// Calculate and print the sum
printfn "Sum of GP series: %f" (sumOfGP a r n)