let compoundInterest principal interest time : int =
  principal * pown (1 + interest) time

let ci = compoundInterest 1000 10 5

printfn "Compound interest : %d" ci
