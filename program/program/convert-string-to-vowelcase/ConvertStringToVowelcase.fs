let convertToVowelCase (inputString: string) =
    let vowels = "aeiouAEIOU"
    
    let isVowel (c: char) = vowels.Contains(c)
    
    let applyVowelCase (c: char) =
        if isVowel c then System.Char.ToUpper(c) else System.Char.ToLower(c)
    
    let result = inputString.ToCharArray() |> Array.map applyVowelCase |> System.String

    result

// Example usage:
let input = "hello world"
let output = convertToVowelCase input
printfn "Input: %s\nOutput: %s" input output