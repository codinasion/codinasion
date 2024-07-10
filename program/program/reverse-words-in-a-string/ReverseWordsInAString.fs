let reverseWords (input: string) =
    let words = input.Split([|' '|], System.StringSplitOptions.RemoveEmptyEntries)
    let reversed = System.String.Join(" ", words |> Array.rev)
    reversed

// Example usage:
let inputString = "Hello World"
let outputString = reverseWords inputString
printfn "Input:  %s" inputString
printfn "Output: %s" outputString

//This program defines a function reverseWords that takes a string as input,
//splits it into words, reverses the array of words, 
//and then joins them back into a string with spaces. 
//The example usage demonstrates reversing the words in the input string "Hello World".