let rec ReverseNumber (num: int) =
    if num > 0 then
        printf "%d" (num % 10)
        ReverseNumber (num / 10)

let reverseNumber (num: int) =
    printfn "Reversed number of %d is:" num
    ReverseNumber num

[<EntryPoint>]
let main argv =
    let number = 12345
    reverseNumber number
    0
