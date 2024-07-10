let inchesToMiles (inches: int) =
    inches / 63360

let miles = inchesToMiles 316800
printfn "Equivalent Miles : %d" miles
