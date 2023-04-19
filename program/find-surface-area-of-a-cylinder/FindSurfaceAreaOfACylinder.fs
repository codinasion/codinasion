let surfaceArea radius height : float =
   let pi = 3.14159
   2.0 * pi * radius * (radius+height)

let cylinder = surfaceArea 2.0 3.0

printfn "Surface area of cylinder : %f" cylinder
