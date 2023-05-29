let perimeterOfSquare side : int =
  4 * side

printfn "Enter the side :"
let side = int (System.Console.ReadLine())
let perimeter = perimeterOfSquare side

printfn "Perimeter of square : %d" perimeter
