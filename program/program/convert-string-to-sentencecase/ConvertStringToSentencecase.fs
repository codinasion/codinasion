open System

let toSentenceCase (input: string) =
    match input.Split([|' '|], StringSplitOptions.RemoveEmptyEntries) with
    | [||] -> ""  // Handle empty string case
    | [|head; tail|] ->
        String.concat " " [head.[0].ToString().ToUpper() + head.Substring(1); tail]
    | _ -> input  // Handle cases with more than one word

// Example usage
let inputString = "hello world"
let result = toSentenceCase inputString

printfn "Input: %s" inputString
printfn "Output: %s" result
