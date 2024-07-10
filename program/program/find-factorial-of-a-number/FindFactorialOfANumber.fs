let rec factorial (fac : int) : int  = 
    if  fac = 0 then 1 
    else fac * factorial (fac-1)
let num = factorial 5
printfn "Factorial of given number : %A" num
