open System

let test = "123"
let mutable result = 0

if Int32.TryParse(test, &result) then
    printfn "%A" result
else 
    fprintf stderr "Error: Not a number"
