let rec average (numbers : int list) =
    match numbers with
    | [] -> 0.0 // Base case: empty list, return 0
    | x::xs -> (float x + average xs * float (List.length xs)) / float (List.length numbers)

let input = [1; 2; 3; 4; 5]
let result = average input

printfn "Average of numbers: %.1f" result