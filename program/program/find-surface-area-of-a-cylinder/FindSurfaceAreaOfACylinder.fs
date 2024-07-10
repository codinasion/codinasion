let surfaceArea radius height : float =
   let pi = 3.14159
   2.0 * pi * radius * (radius+height)

printfn "Enter the radius :"
let radius = float (System.Console.ReadLine())
printfn "Enter the height :"
let height = float (System.Console.ReadLine())
let cylinder = surfaceArea radius height

printfn "Surface area of cylinder : %f" cylinder
