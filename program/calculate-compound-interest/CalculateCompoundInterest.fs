let compoundInterest principal interest time : float =
  principal * (1.0 + interest) / time

let ci = compoundInterest 1000.0 10.0 5.0

printfn "Compound interest : %f" ci
