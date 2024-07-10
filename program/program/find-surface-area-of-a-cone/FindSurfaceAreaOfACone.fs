let surfaceAreaOfCone radius height : float =
   let pi = 3.14159
   pi * radius * (radius+height)

let cone = surfaceAreaOfCone 2.0 3.0

printfn "Surface area of cone: %f" cone
