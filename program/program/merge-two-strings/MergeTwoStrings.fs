let mergeStrings str1 str2 =
    String.Concat([|str1; str2|])
    
// Example usage
let merged = mergeStrings "ABC" "DEF"
printfn "%s" merged // Outputs "ABCDEF"
