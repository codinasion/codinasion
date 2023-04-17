let perimeterOfRectangle length width : int =
  2 * (length + width)

let perimeter = perimeterOfRectangle 2 3

printfn "Perimeter of rectangle : %d" perimeter
