let rec sumAndCountDigits n sum count =
    if n = 0 then (sum, count)
    else sumAndCountDigits (n / 10) (sum + n % 10) (count + 1)

let averageOfDigits n =
    let (sum, count) = sumAndCountDigits n 0 0
    if count = 0 then 0 else sum / count

[<EntryPoint>]
let main argv =
    let number = 123
    let average = averageOfDigits number
    printfn "Input  : %d" number
    printfn "Output : %d" average
    0 // Return an integer exit code
