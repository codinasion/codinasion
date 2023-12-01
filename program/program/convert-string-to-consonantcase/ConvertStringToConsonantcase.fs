let toConsonantCase (input: string) =
    let isVowel (c: char) =
        "aeiouAEIOU" |> Seq.contains c

    let convertChar (c: char) =
        if isVowel c then System.Char.ToLower c
        else System.Char.ToUpper c

    let convertString (s: string) =
        s |> Seq.map convertChar |> System.String.Concat

    convertString input

// Example Usage
let inputString = "hello world"
let result = toConsonantCase inputString
printfn "Input: %s\nOutput: %s" inputString result