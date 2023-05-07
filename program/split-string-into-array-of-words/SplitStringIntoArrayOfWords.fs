let splitIntoWords (str: string) =
    str.Split([|' '|], StringSplitOptions.RemoveEmptyEntries)

// Example usage
let words = splitIntoWords "hello world"
printfn "%A" words // Output: [|"hello"; "world"|]
