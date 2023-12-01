open System

let alternatingCase (input: string) =
    let convert (c: char) (isUpper: bool) =
        match Char.IsLetter c with
        | true -> if isUpper then Char.ToUpper c else Char.ToLower c
        | false -> c

    let rec loop (str: string) (index: int) (isUpper: bool) =
        if index < str.Length then
            let updatedChar = convert str.[index] isUpper
            let nextIsUpper = if Char.IsLetter str.[index] then not isUpper else isUpper
            updatedChar.ToString() + loop str (index + 1) nextIsUpper
        else
            ""

    loop input 0 false  // Start with lowercase for the first character

// Example usage
let result = alternatingCase "hello world"
printfn "%s" result