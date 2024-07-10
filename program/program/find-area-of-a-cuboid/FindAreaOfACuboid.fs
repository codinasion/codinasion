printfn "Enter the length :"
let length = int (System.Console.ReadLine())
printfn "Enter the width :"
let width = int (System.Console.ReadLine())
printfn "Enter the height :"
let height = int (System.Console.ReadLine())
let area = 2 * ((length * width) + (length * height) + (width * height))

printfn "Area of cuboid  : %d" area
