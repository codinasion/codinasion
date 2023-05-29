let simpleInterest principal interest time : float =
   principal * interest * time / 100
   
let si = simpleInterest 1000.00 10.00 5.00

printfn "Simple Interest : %f" si
