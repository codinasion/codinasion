let isAnagram (s1:string) (s2:string) =
    let sortedS1 = s1.ToLower().ToCharArray() |> Array.sort
    let sortedS2 = s2.ToLower().ToCharArray() |> Array.sort
    sortedS1 = sortedS2

let s1 = "pan"
let s2 = "nap"

if isAnagram s1 s2 then
    printfn "Anagram Strings"
else
    printfn "Not Anagram Strings"
