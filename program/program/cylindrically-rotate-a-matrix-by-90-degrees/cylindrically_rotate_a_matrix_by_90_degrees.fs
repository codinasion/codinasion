let cylindricalRotate90 (matrix:int[,]) =
    let rows = matrix.GetLength(0)
    let cols = matrix.GetLength(1)
    
    // Create a new matrix to store the rotated values
    let result = Array2D.create cols rows 0
    
    // Rotate the matrix by 90 degrees
    for i in 0..(rows - 1) do
        for j in 0..(cols - 1) do
            result.[j, rows - 1 - i] <- matrix.[i, j]
    
    result

// Define the input matrix
let inputMatrix = array2D [[1; 2; 3]; [4; 5; 6]; [7; 8; 9]]

// Print the original matrix
printfn "Input Matrix:"
for i in 0..(inputMatrix.GetLength(0) - 1) do
    for j in 0..(inputMatrix.GetLength(1) - 1) do
        printf "%d " inputMatrix.[i, j]
    printfn ""

// Perform cylindrical rotation
let rotatedMatrix = cylindricalRotate90 inputMatrix

// Print the rotated matrix
printfn "\nOutput Matrix:"
for i in 0..(rotatedMatrix.GetLength(0) - 1) do
    for j in 0..(rotatedMatrix.GetLength(1) - 1) do
        printf "%d " rotatedMatrix.[i, j]
    printfn ""
