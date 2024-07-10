let findSmallestElement (matrix: int[][]) =
    let numRows = matrix.Length
    let numCols = matrix.[0].Length
    
    let mutable smallest = matrix.[0].[0]

    for i in 0 .. numRows - 1 do
        for j in 0 .. numCols - 1 do
            if matrix.[i].[j] < smallest then
                smallest <- matrix.[i].[j]

    smallest

// Example usage
let matrix : int[][] = [|
    [|4; 7; 3|];
    [|9; 4; 2|];
    [|0; 6; 4|];
|]

let smallestElement = findSmallestElement matrix
printfn "The smallest element in the matrix is: %d" smallestElement