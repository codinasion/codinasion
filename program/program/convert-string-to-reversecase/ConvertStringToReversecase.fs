open System

// function to reverse the case of a given string
let reverseCase (inputString: string) =
    let mutable result = System.Text.StringBuilder()
    for c in inputString do
        if Char.IsLower c then
            result.Append(Char.ToUpper(c) |> string)
        else
            result.Append(Char.ToLower(c) |> string)
    result.ToString()

let inputString = "hello world"
let reversedString = reverseCase inputString
printfn "%s" reversedString
