let secondsToWeeks secs : int =
   secs / 604800

let weeks = secondsToWeeks 3024000

printfn "Equivalent weeks : %d" weeks
