let mutable (a, b) = (10, 20)

let swap (left : 'a byref) (right : 'a byref) =
  let temp = left
  left <- right
  right <- temp

swap (&a) (&b)
printfn "a: %i ; b: %i" a b
