let feetToInches (feet:float) =
    feet * 12.0

let feet = 5.0

let inches = feetToInches feet

printfn "%f feet is equal to %f inches" feet inches
