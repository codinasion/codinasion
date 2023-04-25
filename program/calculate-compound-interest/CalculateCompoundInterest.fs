let interest = 10.0  
let time = 5.0       
let principal = 1000.0     

let compound principal interest time = 
      principal * ((1.0 + interest/100.0) ** (time))
       
let res = compound principal interest time

printfn "Compound interest : %.2f" res
